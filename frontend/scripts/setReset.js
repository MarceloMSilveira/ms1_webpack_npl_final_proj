export default function setReset(analizingText, divResult, inputUrl) {
  analizingText.style.display='none';
  divResult.innerHTML='';
  inputUrl.placeholder='url to parse';
}