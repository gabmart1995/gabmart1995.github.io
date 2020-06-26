function drawLine( color, xInit, xFinish, yInit, yFinish, pad  ) {
	
	pad.beginPath();
	pad.strokeStyle = color;
	pad.moveTo( xInit, yInit );
	pad.lineTo( xFinish, yFinish );
	pad.stroke();
	pad.closePath();
}

function generateChartBar() {
	
	const ctx = chart1.getContext('2d');

	const myChart = new Chart( ctx, {
		type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
    },

     options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
	});
}

function generateChartPie() {
	
	const ctx = chart3.getContext('2d');

	myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
    	labels: [ 'Red', 'Blue', 'Yellow' ],
    	datasets: [{
    		label:"My First Dataset",
    		data:[300,50,100], 
    		backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}]
    }
  });
}

function generateChartLine() {

	const ctx = chart2.getContext('2d');

	myLineChart = new Chart( ctx, {
		"type":"line",
		"data":{ 
			"labels":["January","February","March","April","May","June","July"],
			"datasets":[{
				"label":"My First Dataset",
				"data":[65,59,80,81,56,55,40],
				"fill":false,
				"borderColor":"rgb(75, 192, 192)",
				"lineTension":0.1
			}]
		},
		
		"options":{}});
}

//  canvas
const canvas = document.getElementsByTagName('canvas');

const eifel = canvas[0]; 
const chart1 = canvas[1];
const chart2 = canvas[2];
const chart3 = canvas[3];

const context = eifel.getContext('2d');

const lines = 30;
let count = 0;

let yI = 0;
let xF = 0;

for ( count = 0; count < lines; count++ ) {
	yI = 10 * count;
	xF = 10 * ( count + 1 );

	drawLine( '#17202a', 0, yI, xF, 300, context );
	drawLine( '#17202a', 300, yI, xF, 0, context );
}

generateChartBar();
generateChartPie();
generateChartLine();
