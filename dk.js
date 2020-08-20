
var customTooltips = function(tooltip) {
    $(this._chart.canvas).css('cursor', 'pointer');

    var positionY = this._chart.canvas.offsetTop;
    var positionX = this._chart.canvas.offsetLeft;

    $('.chartjs-tooltip').css({
        opacity: 0,
    });

    if (!tooltip || !tooltip.opacity) {
        return;
    }

    if (tooltip.dataPoints.length > 0) {
        tooltip.dataPoints.forEach(function(dataPoint) {
            var content = [dataPoint.label, dataPoint.value].join(': ');
            var $tooltip = $('#tooltip-' + dataPoint.datasetIndex);

            $tooltip.html(content);
            $tooltip.css({
                opacity: 1,
                top: positionY + dataPoint.y + 'px',
                left: positionX + dataPoint.x + 'px',
            });
        });
    }
};
var color = Chart.helpers.color;
var lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        borderColor: window.chartColors.red,
        pointBackgroundColor: window.chartColors.red,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'My Second dataset',
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        borderColor: window.chartColors.blue,
        pointBackgroundColor: window.chartColors.blue,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]
};

window.onload = function() {
    var chartEl = document.getElementById('chart1');
    new Chart(chartEl, {
        type: 'line',
        data: lineChartData,
        options: {
            title: {
                display: true,
                text: 'Chart.js - Custom Tooltips using Data Points'
            },
            tooltips: {
                enabled: false,
                mode: 'index',
                intersect: false,
                custom: customTooltips
            }
        }
    });
};
