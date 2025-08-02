import callNlpApi from "./callApiRoute.js";
import setReset from "./setReset.js";

const theForm = document.querySelector('#the-form');
const currentYearElement = document.querySelector('#this-year');
const inputUrl = document.querySelector('#input-url');
const analizingText = document.querySelector('#analizing');
const divResult = document.querySelector('#result');

//seting date to current year:
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

//dealing with submit
theForm.addEventListener('submit',async (evt)=>{
  evt.preventDefault();
  const url = inputUrl.value;
  //send url (with axios / post) the url to frontend:
  await callNlpApi(url);
});

//dealing with reset
theForm.addEventListener('reset',()=>setReset(analizingText, divResult, inputUrl));


