const queryBTC = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=30';
const queryLINK = 'https://api.coingecko.com/api/v3/coins/chainlink/market_chart?vs_currency=USD&days=30';

$(document).ready(btc());
const ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [],
        }],
    },
    options: {
        legend: {
            display: false,
        },
        tooltips: {
            // Disable the on-canvas tooltip
            enabled: true,
            element: function(context) {
                var index = context.dataIndex;
                var value = context.dataset.data[index];
                return console.log(index, value);
            }
        }
    }

});

$('#btc').on('click', btc);
$('#link').on('click', link);

function btc() {
    $.ajax({
        url: queryBTC,
        method: "GET"
    }).then(function (response) {
        let times = [];
        let prices = [];
        response.prices.forEach(function (price) {

            times.push(moment(price[0]).format());
            prices.push(price[1]);

        })
        removeData(chart);
        addData(chart, times, prices, 'BTC');
        console.log(chart.data);

    })
}

function link() {
    $.ajax({
        url: queryLINK,
        method: "GET"
    }).then(function (response) {
        let times = [];
        let prices = [];
        response.prices.forEach(function (price) {

            times.push(moment(price[0]).format());
            prices.push(price[1]);

        })
        removeData(chart);
        addData(chart, times, prices, 'LINK');
        console.log(chart.data);

    })
}


function addData(chart, label, data, point) {
    chart.data.labels = label;
    chart.data.datasets.push({
        label: point,
        data: data
    })
    chart.update();
}

function removeData(chart) {
    chart.data.labels = [];
    chart.data.datasets = [];
    chart.update();
}