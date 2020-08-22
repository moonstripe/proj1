$(document).ready(function () {
    let APIkey = '907C0580-5FA2-4B94-AA1B-205B598EE4CA';
    let coin_name = "bitcoin"
    let period_id = 
    let time_start ="2019";
    let time_end = "2020";
    let URL = `https://rest.coinapi.io/v1/ohlcv/${coin_name}/USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
    // let URL = "https://rest.coinapi.io/v1/"
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});