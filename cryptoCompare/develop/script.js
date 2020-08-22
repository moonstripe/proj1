$(document).ready(function () {
    let APIkey = '34de05666031e3401bfffe94b769a8ea1f882ee33fe676469823cfefda050b2e';
    let coin_name = "BTC"
    // let time_start ="2019";
    // let time_end = "2020";
    let URL = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin_name}&tsym=USD&limit=10&${APIkey}`;
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (let i = 0; i < 5; i++) {
            let date = response.Data.Data[i].time;
        console.log(response.Data.Data[i]);
        let dateFormat = Date(date);
        console.log(dateFormat);
        }

        // can set timeFrom and TimeTo parems but only with the numbers they use for dates
        // try to parse it from date here:
        let timeF = moment.unix("1597965775");
        console.log(timeF)

        // let date = response.Data.Data[1].time;
        // console.log(response.Data.Data[1]);
        // let dateFormat = Date(date);
        // console.log(dateFormat);
        // $("#date").append(dateFormat);
        // let name = "BTC";
        // $("#coinName").append(name);
    });
});