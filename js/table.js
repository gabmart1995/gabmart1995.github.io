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
              ${ element.completed ? 
                `<i class="fas fa-times w3-margin-right" onclick="completeTodo( ${ element.id } )"></i>` : 
                `<i class="fas fa-check w3-margin-right" onclick="completeTodo( ${ element.id } )"></i>` 
              }
              <i class="fas fa-trash" onclick="removeTodo( ${ element.id } )"></i>
            </td>
          </tr>
        `
      });
  
    } 
  }
  
  function removeTodo( todoId ) {
    
    todos = todos.filter( ( todo ) => todo.id !== todoId );
    showTable();
  }
  
  function submit( $event ) {
    
    const formulario = new FormData( form );
    
    let todo = {
      id: new Date().getTime(),
      name: formulario.get('todoName'),
      description: formulario.get('todoDescription'),
      completed: false
    };
  
    todos.push( todo );
    showTable();

    $event.preventDefault();
  }

  function completeTodo( todoId ) {
    
    todos = todos.map( ( todo ) => {
        
        if ( todo.id === todoId ) {
      
          const totalTodo = document.getElementsByTagName('span');
          addCompleted( totalTodo[0], todo.completed );

          return {
            ...todo,
            completed: !todo.completed
          };

        } else {
            return todo;
        }
    });

    showTable();
  }

  function addCompleted( span, completed ) {
   
    if ( completed ) {
      span.innerText = parseInt( span.innerText ) + 1
    
    } else {
      span.innerText = parseInt( span.innerText ) - 1
    }
  }
    
  let todos = [];
  const form = document.getElementById('form');
  const table = document.getElementById('tbody');
  
  form.addEventListener( 'submit', submit );
  
  