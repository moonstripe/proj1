const apiKey = '907C0580-5FA2-4B94-AA1B-205B598EE4CA';
let period_id = "10DAY";
let coin_name = 'BITSTAMP';
const time_end = moment().format();
let time_start = moment().subtract(1, 'years').format();
const queryURL = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
const queryURL1 = `https://rest.coinapi.io/v1/symbols?filter_symbol_id=BTC&apikey=${apiKey}`

$(document).ready( getGraph(queryURL));

$('#submit').on('click', function () {
    console.log($(this).siblings('input').val());
    let querySel = "";

    if (!$(this).siblings('input').val()) {
        coin_name = "BITSTAMP"
        console.log(coin_name);
    } else {
        coin_name = $(this).siblings('input').val();
        console.log(coin_name);
    }


    if ($(this).siblings('select').val() === 'year') {
        period_id = "7DAY";
        time_start = moment().subtract(1, 'years').format();

        querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;


    } else if ($(this).siblings('select').val() === 'quarter') {
        period_id = "1DAY";
        time_start = moment().subtract(3, 'months').format();

        querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
    } else if ($(this).siblings('select').val() === 'month') {
        period_id = "12HRS";
        time_start = moment().subtract(1, 'months').format();

        querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
    } else if ($(this).siblings('select').val() === 'week') {
        period_id = "3HRS";
        time_start = moment().subtract(1, 'weeks').format();

        querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
    } else if ($(this).siblings('select').val() === 'today') {
        period_id = "15MIN";
        time_start = moment().subtract(1, 'days').format();

        querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
    }
    console.log(querySel)

    getGraph(querySel);



});
$('#coin-name').on('keydown', function (e) { 
    if (e.key === "Enter") {
        if ($(this).siblings('select').val() === 'year') {
            period_id = "7DAY";
            time_start = moment().subtract(1, 'years').format();
            coin_name = $(this).siblings('input').val();
    
            const querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
    
    
        } else if ($(this).siblings('select').val() === 'quarter') {
            period_id = "1DAY";
            time_start = moment().subtract(3, 'months').format();
            coin_name = $(this).siblings('input').val();
    
            const querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
        } else if ($(this).siblings('select').val() === 'month') {
            period_id = "12HRS";
            time_start = moment().subtract(1, 'months').format();
            coin_name = $(this).siblings('input').val();
    
            const querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
        } else if ($(this).siblings('select').val() === 'week') {
            period_id = "3HRS";
            time_start = moment().subtract(1, 'weeks').format();
            coin_name = $(this).siblings('input').val();
    
            const querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
        } else if ($(this).siblings('select').val() === 'today') {
            period_id = "15MIN";
            time_start = moment().subtract(1, 'days').format();
            coin_name = $(this).siblings('input').val();
    
            const querySel = `https://rest.coinapi.io/v1/ohlcv/${coin_name}_SPOT_BTC_USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&apikey=${apiKey}`;
        }

        getGraph(querySel);
    }
});

function responsivefy(svg) {
    // get container + svg aspect ratio
    var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("perserveAspectRatio", "xMinYMid")
        .call(resize);

    // to register multiple listeners for same event type, 
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on("resize." + container.attr("id"), resize);

    // get width of container and resize svg to fit it
    function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}

function getGraph(queryURL) {
    $('#chart').empty()
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        const margin = { top: 50, right: 50, bottom: 50, left: 50 };
        const width = window.innerWidth - margin.left - margin.right;
        const height = window.innerHeight - margin.top - margin.bottom;
        // add SVG to the page
        const svg = d3
            .select('#chart')
            .append('svg')
            .attr('width', width + margin['left'] + margin['right'])
            .attr('height', height + margin['top'] + margin['bottom'])
            .call(responsivefy)
            .append('g')
            .attr('transform', `translate(${margin['left']},  ${margin['top']})`);

        // find data range
        const xMin = d3.min(response, d => {
            return parseInt(moment(d['time_period_end']).local().format('x'));
        });
        const xMax = d3.max(response, d => {
            return parseInt(moment(d['time_period_end']).local().format('x'));
        });
        const yMin = d3.min(response, d => {
            return d['price_close'];
        });
        const yMax = d3.max(response, d => {
            return d['price_close'];
        });
        console.log(xMin, xMax, yMin, yMax);
        // scales for the charts
        const xScale = d3
            .scaleTime()
            .domain([xMin, xMax])
            .range([0, width]);
        const yScale = d3
            .scaleLinear()
            .domain([yMin - 5, yMax])
            .range([height, 0]);

        svg
            .append('g')
            .attr('id', 'xAxis')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));
        svg
            .append('g')
            .attr('id', 'yAxis')
            .attr('transform', `translate(${width}, 0)`)
            .call(d3.axisRight(yScale));
        // generates close price line chart when called
        const line = d3.line()
            .x(d => {
                return xScale(parseInt(moment(d['time_period_end']).local().format('x')));
            })
            .y(d => {
                return yScale(d['price_close']);
            });
        // Append the path and bind data
        svg
            .append('path')
            .data([response])
            .style('fill', 'none')
            .attr('id', 'priceChart')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', '1.5')
            .attr('d', line);
    }
    );
}
