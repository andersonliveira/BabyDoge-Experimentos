const axios = require('axios');
async function getDollar(vlBRL = 0.0) {
    const url = 'http://economia.awesomeapi.com.br/json/last/USD-BRL'
    await axios.get(url).
        then(resp => {
            const { USDBRL: { high } } = resp.data
            const dolarNumber = Number(high)
            const total = Number(vlBRL / dolarNumber).toFixed(2)
            console.log(`Valor do dollar:R$${dolarNumber}`)
            console.log(`QTD de dollar:${total}`)

        })
}
getDollar(200);