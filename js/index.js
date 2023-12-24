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

    const initTranslate = () => {
        const translateContent = () => {
            const translateElements = document.querySelectorAll('i18-translate');
            if (translateElements.length === 0) return;

            for (const translateElement of translateElements) {
                translateElement._lang = translateElement._lang === 'es' ? 'en' : 'es';
            }
        };

        fetch('translate/translate.json')
            .then(response => {
                if (!response.ok) throw new Error('Error en la consulta');
                return response.json();
            })
            .then(translates => {
                window.translate = translates;

                // ejecutamos la carga del componente si el translate esta
                // cargado ...
                return import('../translate/translate-component.js');
            })
            .then(() => {
                const translateButton = document.querySelector('#translate-button');
                if (!translateButton) return;

                translateButton.addEventListener('click', () => {
                    translateContent();
                });

                translateContent();
            })
            .catch(console.error);
    };

    AOS.init({ duration: 1200 });
    
    initSidebar();
    initYear();
    initMap();
    initTranslate();
})();
