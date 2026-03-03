import { stockData } from "./fakeStockAPI"

function renderStockTicker (stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById ('price')
    const stockDisplayPriceIcon = document.getElementById ('price-icon')
    const stockDisplayTime = document.getElementById('time')



stockDisplayName.innerHTML = `Name:${stockData.name}`



console.log(stockData)
}


renderStockTicker(stockData)