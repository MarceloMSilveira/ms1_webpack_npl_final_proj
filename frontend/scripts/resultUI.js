const analizingText = document.querySelector('#analizing');
const divResult = document.querySelector('#result');

export default function createResultUI(result) {
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