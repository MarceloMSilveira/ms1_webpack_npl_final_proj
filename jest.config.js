export default {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'jsdom', // necessário se estiver usando DOM no código
}