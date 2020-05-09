// TODOS
let todos = [];
const form = document.forms['form-table'];
const formModal = document.forms['form-modal'];
const table = document.getElementById('tbody');
  
form.addEventListener( 'submit', createTodo );
formModal.addEventListener( 'submit', editTodo );

class Todo {  
  constructor( name, description ) {
    this.name = name || '';
    this.description = description || '';
    this.id = new Date().getTime();
    this.completed = false;
  }
}

function showTable() {
  
    table.innerHTML = '';
  
    if ( todos.length > 0 ) {
  
      todos.forEach( ( element, index ) => {
        
        table.innerHTML += `
          <tr>
            <td class="w3-center">${ index + 1 }</td>
            <td class="w3-center">${ element.name }</td>
            <td class="w3-center">${ element.description }</td>
            <td class="w3-center">
              ${ element.completed ? 
                `<i class="point fas fa-times w3-margin-right" onclick="completeTodo( ${ element.id } )"></i>` : 
                `<i class="point fas fa-check w3-margin-right" onclick="completeTodo( ${ element.id } )"></i>` 
              }
              <i class="point fas fa-pen w3-margin-right" onclick="showModal( true, {
                id: ${ element.id },
                name: '${ element.name }',
                description: '${ element.description }'
                })"
              ></i>
              <i class="point fas fa-trash" onclick="removeTodo( ${ element.id } )"></i>
        
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

function createTodo( $event ) {

  const formulario = new FormData( form );

  todos.push(  
    new Todo( formulario.get('name'), formulario.get('description') ) 
  );

  form['name'].value = '';
  form['description'].value = '';

  showTable();

  $event.preventDefault();
}

function completeTodo( todoId ) {
  
  todos = todos.map( ( todo ) => {
      
      if ( todo.id === todoId ) {
    
        const totalTodo = document.getElementsByTagName('span');
        addCompleted( totalTodo[0], !todo.completed );

        return {
          ...todo,
          completed: !todo.completed
        };
      } 

      return todo;
  });

  showTable();
}

function editTodo( $event ) {

  const editForm = new FormData( formModal );

  todos = todos.map( ( todo ) => {

    if ( todo.id === +editForm.get('id') ) {
      return {
        ...todo,
        name: editForm.get('name'),
        description: editForm.get('description')
      }
    }

    return todo
  });

  showModal( false );
  showTable();

  $event.preventDefault();
}


function addCompleted( span, completed ) {
  
  if ( completed ) {
    span.innerText = parseInt( span.innerText ) + 1
  
  } else {
    span.innerText = parseInt( span.innerText ) - 1
  }
}

function showModal( open, todo = null ) {

  const modal = document.getElementById('modal-table');
  
  if ( open && todo !== null ) {
    formModal['name'].value = todo.name;
    formModal['description'].value = todo.description;
    formModal['id'].value = todo.id;
    modal.style.display = 'block';
  
  } else {
    modal.style.display = 'none';
  }
}
  
  