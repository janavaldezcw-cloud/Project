import { getStockData } from "./fakeStockAPI.js"


let previousPrice = null; 
const stockData = getStockData()


function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')



    stockDisplayName.innerHTML = `${stockData.name}`
    stockDisplayPrice.innerHTML = `${stockData.price} ${symbolCheck(stockData.price)}`;
    stockDisplaySymbol.innerHTML = `${stockData.sym}`
    stockDisplayTime.innerHTML = `${stockData.time}`


}





function symbolCheck(currentPrice) {
    let symbol = '';

    if (previousPrice === null) {
        symbol = '▷';             // first call
    } else if (currentPrice > previousPrice) {
        symbol = '▲';             // price went up
    } else if (currentPrice < previousPrice) {
        symbol = '▼';             // price went down
    } else {
        symbol = '▷';             // unchanged
    }

    previousPrice = currentPrice;
    return symbol;
}











setInterval(() => {
    const stockData = getStockData();
    renderStockTicker(stockData);
}, 1000);