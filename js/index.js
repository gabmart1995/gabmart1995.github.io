function showList() {
    
  const nodes = document.getElementsByClassName('list');

  for ( node of nodes ) {
    
    if ( node.style.display === 'none' ) {
      node.style.display = 'block';
    }

    else if (  node.style.display === 'display' ) {
      node.style.display = 'none';
    }

    else {
      node.style.display = 'none';
    }
  }
}

document.addEventListener( 'DOMContentLoaded', showList );

const year = document.getElementById('year');
year.innerText = new Date().getFullYear();