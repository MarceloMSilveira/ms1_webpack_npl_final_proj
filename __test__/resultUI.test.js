import createResultUI from '../frontend/scripts/resultUI.js'

beforeEach(()=>{
  //Simular o DOM inicial esperado
  document.body.innerHTML = `
    <p id="analizing"></p>
    <div id="result"></div>
  `;
});

test('set UI', ()=>{
  const fakeResult = {
    text: 'The shadow of emptiness torments me. There is no hope',
    semtiment: 'NEGATIVE'
  }

  createResultUI(fakeResult);

  const analizingElement = document.querySelector('#analizing');

  expect(analizingElement.textContent).toBe('Success!!!');

})







