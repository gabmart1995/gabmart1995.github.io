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

// ------------------------------------------------ //

// TODOS
function showTable() {
  
  table.innerHTML = '';

  if ( todos.length > 0 ) {

    todos.forEach( function ( element, index ) {
      
      table.innerHTML += `
        <tr>
          <td class="w3-center">${ index + 1 }</td>
          <td class="w3-center">${ element.name }</td>
          <td class="w3-center">${ element.description }</td>
          <td class="w3-center">
            <i class="fas fa-trash" onclick="removeTodo( ${ index +1 } )"></i>
          </td>
        </tr>
      `
    });

  } 
}

function removeTodo( todoId ) {
  
  todos = todos.filter( ( todo, index ) => ( index + 1 ) !== todoId );
  showTable();
}

let todos = [];
const form = document.getElementById('form');
const table = document.getElementById('tbody');

form.addEventListener( 'submit', function ( $event ) {
  
  const formulario = new FormData( form );
  
  let todo = {
    name: formulario.get('todoName'),
    description: formulario.get('todoDescription')
  };

  todos.push( todo );
  showTable();
  $event.preventDefault();
});

