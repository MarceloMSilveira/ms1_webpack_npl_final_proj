import express from "express";
import bodyParser from 'body-parser';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors';

const app = express();
const port = 3002;

// Apply middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

app.use(express.static('../dist'));

app.get('/', (req,res)=>{
  res.send('index.html');
})

app.listen(port,()=>{
  console.log(`Server up on port:${port}`)
});
