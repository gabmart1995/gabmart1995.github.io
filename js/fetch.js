const content = document.getElementById('content-api');

function getResource() {

  fetch('https://randomuser.me/api/')
    .then( async resp  => {
      resp.json()
        .then(
          ({ results }) => {
            let data = {
              name: `${ results[0].name.first } ${ results[0].name.last }`,
              age: results[0].dob.age,
              image: results[0].picture.medium,
              email: results[0].email
            };
    
            content.innerHTML = showTemplate( data );
          }
        ).catch( error => console.error( error ) );
    })
    .catch( error => console.error('comprueba tu conexion a internet') );
}

function showTemplate({ name, image, email, age }) {
  
  return (`
    <div class="w3-center w3-margin-top">
      <img class="w3-circle" src="${ image }" alt="user" />
      <div class="w3-panel w3-white user">
      <h6>
        <span>Nombre:</span> ${ name } <br />
        <span>Edad:</span> ${ age } <br />
        <span>Correo:</span> ${ email } <br />
      </h6>
      </div>
    </div>
  `);
}