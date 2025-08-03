import setReset from "../frontend/scripts/setReset.js";
//Elemento(s) nulo(s) passado(s) para a função.
beforeEach(()=>{
  document.body.innerHTML = `
    <input type="text" id="inputUrl" name="" value="">
    <p id="analizingText"></p>
    <div id="divResult">
      
    </div>
  `
});

test('executa com sucesso e limpa a interface',()=>{
  const analizingText = document.querySelector('#analizingText');
  const divResult = document.querySelector('#divResult');
  const inputUrl = document.querySelector('#inputUrl');

  // conteúdo prévio
    divResult.innerHTML = '<p>texto antigo</p>';
    analizingText.style.display = 'block';
    inputUrl.placeholder = 'algo antigo';

  setReset(analizingText, divResult, inputUrl);

  expect(divResult.innerHTML).toBe('');
  expect(analizingText.style.display).toBe('none');
  expect(inputUrl.placeholder).toBe('url to parse');
});

test('Lança erro em caso de argumento nulo',()=>{
  const analizingText = document.querySelector('#analizingText');
  const inputUrl = document.querySelector('#inputUrl');
  const divResult = null; //argumento nulo

  expect(()=>setReset(analizingText, divResult, inputUrl).toThrow(/nulo/));

});

test('lança erro se o elemento não estiver no DOM', () => {
  const analizingText = document.createElement('p'); // não inserido no DOM
  const divResult = document.querySelector('#divResult');
  const inputUrl = document.querySelector('#inputUrl');

  expect(() => {
    setReset(analizingText, divResult, inputUrl);
  }).toThrow('analizingText não está presente no DOM.');
});

