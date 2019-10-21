
import Chart from "chart.js"

function Charts(props){
    console.log("chart props: ", props.data)
    var dates = [];
    var data = [];
    var date;
    for(var increment = 1; increment < props.data.length; increment++){
        date = new Date(props.data[increment].time * 1000)
        date = date.toDateString()
        dates.push(date)
        data.push(props.data[increment].close)
    }
        var ctx = document.getElementById('myChart');
              var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: dates,
                        datasets: [{
                            label: props.show,
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