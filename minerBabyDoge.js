let array = [];

const zero = n => {
    return ('O' + n).slice(-2);
}
setInterval(() => {
    let agora = new Date();
    let dataHora = zero(agora.getUTCDate()) + '/' + zero((agora.getUTCMonth() + 1)) + '/' + agora.getFullYear() + ' ' + zero(agora.getHours()) + ':' + zero(agora.getMinutes()) + ':' + zero(agora.getSeconds());
    let mineirado = Math.round(Number(Math.random() * (10000 - 50) + 50).toFixed(2));
    array.push(mineirado)
    let reduzir = array.reduce((p, ac) => p + ac)
    console.log(`hash:27FEDC9B87C422443BC8C29F6EF47A86E381E4171BA29F99FB0459ED303DF717`);
    console.log(`Horário:${dataHora}`)
    console.log(`total BabyDoge  :${reduzir}`);
}, 3000);
