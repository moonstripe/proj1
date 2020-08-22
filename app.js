const since = moment().subtract(1, 'months');
let coinName = "BTC";

const xbakey = "M2M1ZWE1MzEwNWUzNGZhNmE5MWNiMDBmMGEwZTI5Y2U";
const query = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coinName}&tsym=USD&limit=30&api_key=34de05666031e3401bfffe94b769a8ea1f882ee33fe676469823cfefda050b2e`

const queryBTC = `https://apiv2.bitcoinaverage.com/indices/global/history/${coinName}USD?since=${since.unix()}&resolution=day`;
const queryLINK = 'https://api.coingecko.com/api/v3/coins/chainlink/market_chart?vs_currency=USD&days=90';
let articles = [];
const newsData = {
    "status": "ok",
    "totalResults": 184,
    "articles": [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Makena Kelly",
            "title": "Coinbase says it halted more than $280,000 in bitcoin transactions during Twitter hack",
            "description": "The cryptocurrency exchange Coinbase said that it stopped around 1,100 customers from sending bitcoin to hackers who gained access to high-profile Twitter accounts.",
            "url": "https://www.theverge.com/2020/7/20/21331499/coinbase-twitter-hack-elon-musk-bill-gates-joe-biden-bitcoin-scam",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/j9doeI17eouZs-YIK4CCrW4nVSg=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/20086189/acastro_200715_1777_twitter_0002.0.jpg",
            "publishedAt": "2020-07-20T18:08:56Z",
            "content": "The company blacklisted the bitcoin address\r\nIllustration by Alex Castro\r\nThe cryptocurrency exchange Coinbase said that it stopped around 1,100 customers from sending bitcoin to hackers who gained a… [+1775 chars]"
        }]};
const requestURL = `https://newsapi.org/v2/everything?q=${coinName}&apiKey=1b4fa439d5b04275a60ab73d2a80dfba&from=${since.format('YYYY-MM-DD')}&to=${moment().format('YYYY-MM-DD')}&language=en&sortBy=relevancy`;

// news api pull


const ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [

            ],
        }],
    },
    options: {
        legend: {
            display: false,
        },
        elements: {
            point:{
                radius: 1
            }
        },
        tooltips: {
            enabled: false,
            custom: function(tooltipModel) {
                console.log(tooltipModel)
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    // tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        for (let i = 0; i < articles.length; i++) {
                            if (title === moment(articles[i].publishedAt).format('YYYY-MM-DD')) {

                                innerHtml += '<tr><th>' + `<a href=${articles[i].url}>${articles[i].title}</a>` + '</th></tr>';
                            }

                        }
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        console.log(tooltipModel.labelColors[i]);
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            }
        }
    },


});
$(document).ready($.ajax({
    url: requestURL,
    method: "GET"
}).then(function(response) {
    articles = response.articles;
    console.log(articles);
    btc()
}));
$('#btc').on('click', btc);
$('#link').on('click', link);

function btc() {
    let coinName = "BTC";
    let query = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coinName}&tsym=USD&limit=30&api_key=34de05666031e3401bfffe94b769a8ea1f882ee33fe676469823cfefda050b2e`;
    $.ajax({
        url: query,

        method: "GET"
    }).then(function (response) {

        let times = [];
        let prices = [];
        response.Data.Data.forEach(function (instance) {
            console.log(instance);
            times.push(moment.unix(instance.time).format('YYYY-MM-DD'));
            prices.push(instance.close);

        })
        removeData(chart);
        addData(chart, times, prices, coinName);

    })

}

function link() {
    let coinName = "LINK";
    let query = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coinName}&tsym=USD&limit=30&api_key=34de05666031e3401bfffe94b769a8ea1f882ee33fe676469823cfefda050b2e`;

    $.ajax({
        url: query,

        method: "GET"
    }).then(function (response) {

        let times = [];
        let prices = [];
        response.Data.Data.forEach(function (instance) {
            console.log(instance);
            times.push(moment.unix(instance.time).format('YYYY-MM-DD'));
            prices.push(instance.close);

        })
        removeData(chart);
        addData(chart, times, prices, coinName);

    })

}

function keepTooltip(tooltip){

}

function addData(chart, label, data, point) {
    chart.data.keepShowing=[];
    chart.data.labels = label;




    chart.data.datasets.push({
        label: point,
        data: data,
    });


    chart.update();
}

function removeData(chart) {
    chart.data.labels = [];
    chart.data.datasets = [];
    chart.update();
}