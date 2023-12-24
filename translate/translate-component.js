class TranslateComponent extends HTMLElement {
	key = '';
    lang = '';

	/** @type {{[string]: string}} */
	translates = {}
    
    constructor() {
		super();

		this.key = this.textContent ? this.textContent : '';
		this.lang = '';
	}

	set _lang(value) {
		this.lang = value;
		this.translates = window.translate[value];
		this.setTranslateValue();
	}

    get _lang() {
        return this.lang;
    }
	
	static get observedAttributes() {
		return [];
	}

	setTranslateValue() {
		if (this.key.length === 0) return;

		let translateValue = '';
		const keys = this.key.split('.');

		// si la key es de primer nivel extrae la key 
		// y la busca directamente
		if (keys.length === 1) {
			const [key] = keys;
			translateValue = this.translates[key];
			
		} else {
			// se crea una copia para una búsqueda en profundidad
			let deepTranslate = this.translates;

			// inicia la evaluacion
			for (const key of keys) {	
				const isObjectValue = Object.hasOwn(deepTranslate, key) 
					&& typeof deepTranslate[key] === 'object';

				// sobreescribe el objeto deep translate en el siguiente nivel
				// para que en la siguiente iteracion localize la propiedad
				if (isObjectValue) { 
					deepTranslate = deepTranslate[key];
					
				} else {
					translateValue = deepTranslate[key];
				
				}
			}
		}

		if (translateValue && translateValue.length > 0) 
			this.innerHTML = translateValue;
	}

	connectedCallback() {
	}


	attributeChangedCallback( name, oldValue, newValue ) {	
	}

	render() {
	}

	disconnectedCallback() {
	}
}

customElements.define('i18-translate', TranslateComponent);