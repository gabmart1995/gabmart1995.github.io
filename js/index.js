document.addEventListener( 'DOMContentLoaded', () => {
  
  const button = document.querySelector('#responsive-button');
  
  const showList = function() {
    
    const nodes = document.getElementsByClassName('list');
    
    for ( const node of nodes ) {
      
      if ( node.classList.contains('d-none')) {
        node.classList.replace('d-none', 'd-block');
        
      } else {
        node.classList.replace('d-block', 'd-none');
        
      }
    }
  };
  
  button.addEventListener('click', showList );
  
  const year = document.getElementById('year');
  year.innerText = new Date().getFullYear();
});
