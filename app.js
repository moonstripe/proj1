const apiKey = '907C0580-5FA2-4B94-AA1B-205B598EE4CA';
const period_id = "2MTH";
const time_end = moment().format();
const queryURL = `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=${period_id}&time_end=${time_end}&apikey=${apiKey}`;
const queryURL1 = `https://rest.coinapi.io/v1/symbols?filter_symbol_id=BTC&apikey=${apiKey}`

$.ajax({
    url: queryURL,
    method: "GET"
}).then( function(response) {
    console.log(response);
})