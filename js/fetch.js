const content = document.getElementById('content-api');

function getResource() {

  fetch('https://randomuser.me/api/')
    .then( async resp  => {
      const { results } = await resp.json();
      let name = `${ results[0].name.first } ${ results[0].name.last }`;
      let image = results[0].picture.medium;

      content.innerHTML = showTemplate( name, image ); 
    })
    .catch( error => console.error('comprueba tu conexion a internet') )
}

function showTemplate( name, image ) {
  
  return (`
    <div class="w3-center">
      <img class="w3-rounded" src="${ image }" alt="user" /> <br />
    </div>
  `);
}