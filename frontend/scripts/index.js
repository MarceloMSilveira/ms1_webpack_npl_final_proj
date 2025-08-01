import axios from 'axios';

const theForm = document.querySelector('#the-form');
const currentYearElement = document.querySelector('#this-year');
const analizingText = document.querySelector('#analizing');
const divResult = document.querySelector('#result');

//seting date to current year:
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

function createResultUI(result) {
  analizingText.textContent = 'Success!!!';
  const paragraph01 = document.createElement('p');
  paragraph01.textContent = "Result from NPL API:"
  divResult.appendChild(paragraph01);
  const paragraph02 = document.createElement('p');
  paragraph02.textContent = `Extract of Text: ${result.data.text}`;
  divResult.appendChild(paragraph02);
  const paragraph03 = document.createElement('p');
  paragraph03.textContent = `Sentiment of Text: ${result.data.sentiment}`;
  divResult.appendChild(paragraph03);
  divResult.style.display = 'block';
}
//calling /analyze-url endpoint on localhost
async function setTextUsingAPI(url) {
  const objToSend = {'url':url}
  analizingText.style.display='block';
  const result = await axios.post('http://localhost:3002/analyze-url', objToSend);
  console.log(result.data);
  createResultUI(result);
}

//dealing with submit
theForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const url = document.querySelector('#input-url').value;
  //send url (with axios / post) the url to frontend:
  setTextUsingAPI(url);
});




