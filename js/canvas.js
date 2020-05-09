//  canvas
function drawLine( color, xInit, xFinish, yInit, yFinish, pad  ) {
	pad.beginPath();
	pad.strokeStyle = color;
	pad.moveTo( xInit, yInit );
	pad.lineTo( xFinish, yFinish );
	pad.stroke();
	pad.closePath();
}

const eifel = document.getElementById('eifel');
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
