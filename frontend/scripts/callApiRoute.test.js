import callNlpApi from "./callApiRoute.js";

beforeEach(() => {
  document.body.innerHTML = `<p id="analizing"></p>`;
});

test('call api with pessimista', async ()=>{
  const result = await callNlpApi('http://localhost:3003/pessimista');
  expect(result.status).toBe('success');
  expect(result.data.sentiment).toBe('NEGATIVE');
});

test('call api with otimista', async ()=>{
  const result = await callNlpApi('http://localhost:3003/otimista');
  expect(result.status).toBe('success');
  expect(result.data.sentiment).toBe('POSITIVE');
});

test('call api with a invalid url', async ()=>{
  await expect(callNlpApi('not a valid url')).rejects.toThrow('invalid URL typed!');
});