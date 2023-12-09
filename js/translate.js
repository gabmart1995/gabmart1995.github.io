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

    initTranslate(language);
})();