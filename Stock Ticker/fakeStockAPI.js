export { stockData}
function getStockData () {
    getStockData.time = Math.random().toFixed(2)
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: '',
        time: ''
    }
}

let stockData = getStockData()

stockData.price = Math.random().toFixed(2)


stockData.time = new Date().toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

console.log(stockData)