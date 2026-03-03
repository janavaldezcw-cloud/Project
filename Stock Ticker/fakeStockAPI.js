

export function getStockData() {
    const stockData = {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 100).toFixed(2), // random price 0-100
        time: new Date().toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
    };

    return stockData;
}

