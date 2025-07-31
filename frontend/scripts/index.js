import axios from 'axios';

const theForm = document.querySelector('#the-form');
const apiResult = document.querySelector('#api-result');
const currentYearElement = document.querySelector('#this-year');

//seting date to current year:
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

//calling /analyze-url endpoint on localhost
async function setTextUsingAPI(url) {
  const objToSend = {'url':url}
  const result = await axios.post('http://localhost:3002/analyze-url', objToSend);
  console.log(result.data);
  //const msgOfApi = await axios.post('http://localhost:3002/analyze-url', objToSend)
  //console.log(msgOfApi.msg);
  apiResult.textContent = result.data.sentiment;
}

//dealing with submit
theForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const url = document.querySelector('#input-url').value;
  //send url (with axios / post) the url to frontend:
  setTextUsingAPI(url);
});




