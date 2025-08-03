import axios from 'axios';

function isUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

//calling nlp route
export default async function callNlpApi(url) {
  if (!isUrl(url)) {
    throw new Error('invalid URL typed!');
  }

  const analizingText = document.querySelector('#analizing');

  const objToSend = {'url':url}
  analizingText.textContent="Analizing..."
  analizingText.style.display='block';
  try {
    const result = await axios.post('http://localhost:3002/analyze-url', objToSend);
    return {status:'success',data:result.data}; 
  } catch (error) {
    throw new Error('Failed to parse URL. Please try again later.')
  }
}