
import Chart from "chart.js"

function Charts(props){
    console.log("chart props: ", props.data)
    var dates = Object.keys(props.data.bpi);
    var data = [];
    for(var keys in props.data.bpi){
        data.push(props.data.bpi[keys])
    }
        var ctx = document.getElementById('myChart');
              var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: dates,
                        datasets: [{
                            label: 'bpi',
                            data: data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ]
                            
                        }]
                    }
                });
         return myChart;
    }


export default Charts;