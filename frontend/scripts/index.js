import axios from 'axios';

const mock_data_from_api = {
  "title":"data from API",
  "msg":"The msg of API",
  "date":"now"
};

const theForm = document.querySelector('#the-form');
const apiResult = document.querySelector('#api-result');
const currentYearElement = document.querySelector('#this-year');

//seting date to current year:
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

//calling /analyze-url endpoint on localhost
async function setTextUsingAPI(url) {
  const objToSend = {'url':url}
  await axios.post('http://localhost:3002/analyze-url', objToSend);
  //const msgOfApi = await axios.post('http://localhost:3002/analyze-url', objToSend)
  //console.log(msgOfApi.msg);
  //apiResult.textContent = msgOfApi.msg;
  apiResult.textContent = 'test';
}

//dealing with submit
theForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const url = document.querySelector('#input-url').value;
  //send url (with axios / post) the url to frontend:
  setTextUsingAPI(url);
});




