const axios = require('axios');
//coloque sua api key
let access_token = '';
const options = {
    headers: {
        "X-Auth-Token": access_token,
        "content-type": "application/json"
    }
}


async function getQtdBabyDoge() {

    const url = 'https://api.coinranking.com/v2/coin/JY1_q2c0g/price';
    await axios.get(url, options)
        .then(resp => {
            const { data: { price } } = resp.data;
            const formatarValor = Number(price.toString().substring(0, 4));
            const valorBabyDoge = Number(formatarValor / 1000000000).toFixed(12);
            const babyCompradas = 38.35 / valorBabyDoge
            console.log(`Preço da babyDoge $${valorBabyDoge}`)
            console.log(`Total de babyDoge comprada:${babyCompradas}`)
        })
        .catch((error) => {
            console.error(error);
        })
}


getQtdBabyDoge()


