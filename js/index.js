(() => {
  const initSidebar = () => {
    const menu = document.querySelector('#menu');
    if (!menu) return;

    const sidenav = document.querySelector('#sidenav');
    if (!sidenav) return;
    
    const closeButtonSidenav = sidenav.querySelector('.closebtn');
    if (!closeButtonSidenav) return;
    
    // boton de apertura sidenav
    menu.addEventListener('click', () => {
      sidenav.style.width = '250px';
    });

    // boton de cierre sidenav
    closeButtonSidenav.addEventListener('click', () => {
      sidenav.style.width = '0';
    });
  };

  initSidebar();
})();
