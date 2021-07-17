const content = document.getElementById('content-api');

function getResource() {

  showLoading( true );

  setTimeout(() => {

    fetch('https://randomuser.me/api/')
      .then( resp  => {

        resp.json().then(
          ({ results }) => {
            let data = {
              name: `${ results[0].name.first } ${ results[0].name.last }`,
              age: results[0].dob.age,
              image: results[0].picture.medium,
              email: results[0].email
            };

            showLoading( false );

            content.innerHTML = showTemplate( data );
          }
        ).catch( error => console.error( error ) );

      })
      .catch( error => {

        console.error('comprueba tu conexion a internet')

        showLoading( false );

        content.innerHTML = (`
          <div class="flex-row">
            <p class="w3-red">comprueba tu conexion a internet</p>
          </div>
        `);

      });

  }, 2000 );
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

function showLoading( loading =  true ) {

  if ( loading ) {
    return content.innerHTML = (`
      <div style="width: 100%; margin-top: 40px" class="flex-row">
        <i class="fa-2x fas fa-circle-notch fa-spin"></i>
      </div>
    `);
  }

  return content.innerHTML = null;
}
