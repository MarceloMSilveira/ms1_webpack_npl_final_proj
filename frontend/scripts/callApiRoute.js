import axios from 'axios';
const analizingText = document.querySelector('#analizing');
import createResultUI from './resultUI.js';

//calling nlp route
export default async function callNlpApi(url) {
  const objToSend = {'url':url}
  analizingText.textContent="Analizing..."
  analizingText.style.display='block';
  const result = await axios.post('http://localhost:3002/analyze-url', objToSend);
  console.log(result.data);
  createResultUI(result);
}