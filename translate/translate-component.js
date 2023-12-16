class TranslateComponent extends HTMLElement {
	key = '';
    lang = '';
    
    constructor() {
		super();

		// obtenemos la referencias originales antes de ser modificada
		this.key = this.textContent ? this.textContent : '';
		this.lang = '';
	}

	set _lang(value) {
		this.lang = value;

		const translate = window.translate[value][this.key];
		if (translate) this.innerHTML = translate;
	}

    get _lang() {
        return this.lang;
    }
	
	static get observedAttributes() {
		return [];
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