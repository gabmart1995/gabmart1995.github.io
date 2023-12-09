const languages = {
    spanish: 'es-VE',
    english: 'en-US',
};

let language = languages.spanish;
const formatDocument = document.querySelector('html').cloneNode(true); 

(() => {
    /** inicia el translate del sitio */
    const initTranslate = (language) => {
        let url = 'js/';

        if (language === languages.english) {
            url += 'translate_en.json';
        
        } else {
            url += 'translate_es.json';
        
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const htmlElement = document.querySelector('html');  
                let htmlString = formatDocument.innerHTML;

                // iniciamos la conversion
                // recorremos cada key en el JSON
                for (const key in data) {

                    // arma la expresion regular busca las coincidencias
                    const regex = new RegExp(`{{ ${key} }}`, 'g');
                    const coincidences = Array.from(htmlString.matchAll(regex));
                    
                    // recorremos cada una las coincidencias y reemplazamos
                    for (const _ of coincidences) {
                        const value = data[key];
                        htmlString = htmlString.replace(regex, value);
                    }
                }

                // sobre escribimos el HTML del sitio
                htmlElement.innerHTML = htmlString;

                // inicializamos todos los eventos en cada cambio
                changeTranslate();
                initSidebar();
                initMap();
                initYear();
            })
            .catch(console.error);
    };

    const changeTranslate = () => {
        const translateButton = document.querySelector('#translate-button');
        if (!translateButton) return;
   
        translateButton.addEventListener('click', () => {
            language = language === languages.english ? languages.spanish : languages.english;
            initTranslate(language);
        });

    }

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

    initTranslate(language);
})();