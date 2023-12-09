(() => {
    /** Inicializa el menu lateral */
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

    /** inicializa el footer */
    const initYear = () => {
        const year = document.querySelector('#year');
        
        if (year) {
        year.innerText = (new Date()).getFullYear(); 
        }
    };

    /** inicializa el mapa */
    const initMap = () => {
        const mapElement = document.querySelector('#map');
        if (!mapElement) return;

        const map = L.map(mapElement);
        let coords = [10.506872202554534, -66.91478277569756];
        let zoom = 15;

        // añade el fondo al mapa
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker(coords).addTo(map)
        .bindPopup('<span style="color: black;">Caracas, Venezuela</span>')
        .openPopup();

        // establece la camara
        map.setView(coords, zoom);
    };
    
    initSidebar();
    initYear();
    initMap();
})();
