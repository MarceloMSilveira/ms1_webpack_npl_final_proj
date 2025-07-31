import express from "express";
import bodyParser from 'body-parser';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors';

const app = express();
const port = 3002;
const apiUrl = "https://kooye7u703.execute-api.us-east-1.amazonaws.com/NLPAnalyzer";

// Apply middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

app.use(express.static('../dist'));

// Encapsulated function to scrape text from a URL
async function scrapeTextFromURL(url) {
    try {
        console.log(`Fetching and scraping text from URL: ${url}`);

        // Fetch the webpage data
        const { data } = await axios.get(url);

        // Use Cheerio to load the HTML and extract the text
        const $ = cheerio.load(data);
        const text = $('body').text().trim();
        //mock text
        //const text = "I hate it here. How can I hate someone and love them at the same time? I’m a teenager who has probably been through more than the average person, and that somehow has to have traumatized me in a way, but it hasn’t. Mind you I’m a teen and still haven’t developed proper grammar or understanding the difference between, there, their and they’re. So i apologize in advance for the poor grammar you’ll see moving forward."
        // Check if text content exists
        if (!text) {
            console.error('No text content found at the provided URL');
            return null;
        }

        // Extract and return the first 200 characters of the text
        const trimmedText = text.slice(0, 200);
        //console.log(`Extracted Text (200 characters):\n${trimmedText}\n--- End of Text Preview ---`);
        return trimmedText;
    } catch (error) {
        console.error('Error while scraping text from the URL:', error.message);
        throw new Error('Failed to scrape text from the URL');
    }
}

// async call NPL UDACITY API
async function callApi(textToParse) {
  const result = await axios.post(apiUrl,{"text": textToParse});
  //console.log (result.data);
  return result.data;
}

// Route to analyze text from a URL
app.post('/analyze-url', async (req, res) => {
    const { url } = req.body;

    // Validate the input URL
    if (!url) {
        console.error('No URL provided in the request body');
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Step 1: Scrape text from the provided URL
        const text = await scrapeTextFromURL(url);

        if (!text) {
            return res.status(400).json({ error: 'No text content found at the provided URL' });
        }

        // Step 2: Connect to the AWS NLP API
        // --- Learner Task: Add the code to send the extracted text to the AWS NLP API below ---
        // Use `axios.post` to send a POST request to the API.
        // The endpoint URL is: https://kooye7u703.execute-api.us-east-1.amazonaws.com/NLPAnalyzer
        // Send the `text` as part of the request body.
        const result = await callApi(text);
        const {sentiment:sentiment,text:textFromAPI} = result;
        console.log(`O texto é : ${textFromAPI}`);
        /*
        Example Code:
        const response = await axios.post('https://kooye7u703.execute-api.us-east-1.amazonaws.com/NLPAnalyzer', { text });
        return res.json(response.data); // Send the NLP results back to the client
        */

        // send response to frontend:
        return res.json({"sentiment":sentiment,"text":textFromAPI});
    } catch (error) {
        console.error('Error during URL processing or API request:', error.message);
        return res.status(500).json({ error: 'Failed to analyze the URL' });
    }
});

app.get('/', (req,res)=>{
  res.send('index.html');
})

app.listen(port,()=>{
  console.log(`Server up on port:${port}`)
});
