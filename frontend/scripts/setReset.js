export default function setReset(analizingText, divResult, inputUrl) {

  const args = {analizingText, divResult, inputUrl};
  //verificando se tem argumento que não é um elemento html ou não está no DOM
  for(const [name,el] of Object.entries(args)) {
    for (const [name, el] of Object.entries(args)) {
      if (el === null || el === undefined) {
        throw new Error('Elemento(s) nulo(s) passado(s) para a função.');
      }
      if (!(el instanceof HTMLElement)) {
        throw new Error(`${name} não é um elemento HTML válido.`);
      }
      if (!document.body.contains(el)) {
        throw new Error(`${name} não está presente no DOM.`);
      }
    }
  }
  
  
  analizingText.style.display='none';
  divResult.innerHTML='';
  inputUrl.placeholder='url to parse';
}