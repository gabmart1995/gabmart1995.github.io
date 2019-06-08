// =======================================
//		Class Barra									
// =======================================
class Barra {
    
    constructor(selector, limite) {
        this.tiempo = 30;
        this.selector = selector;
        this.limite = limite;
    }

    incrementar() {

        let selector = this.selector;
        let limite = this.limite;
        
        let animacion = setInterval(() => {
            if (selector.value <= limite) {
                selector.value += 5;
            }
            else {
                clearInterval(animacion);
            }
        }, this.tiempo);
    }
};

// =======================================
//				Class Slider							
// =======================================
class Slider {

    constructor(slideId) {
        this.sliderClass = ['slide1', 'slide2', 'slide3'];
        this.index = 1;
        this.slideId = slideId;
    }

    obtenerDivs(numero) {
        this.mostrarDivs(this.index += numero);
    }

    mostrarDivs(numero) {
        
        let selector = document.getElementsByClassName(this.sliderClass[this.slideId]);

        if (numero > selector.length) {
            this.index = 1;
        }
    
        if (numero < 1) {
            this.index = selector.length;
        }
    
        for (let i = 0; i < selector.length; i++) {
            selector[i].style.display = "none";
        }
        
        // retorna la visualizacion de la imagen
        selector[this.index -1].style.display = "block";
    }
};

// =======================================
//		    Instancion de objetos							
// =======================================
var html = new Barra($("#html5"), 90);
var php = new Barra($("#php"), 70);
var css = new Barra($("#css3"), 50);
var js = new Barra($("#js"), 75);
var sql = new Barra($("#sql"), 55);
var java = new Barra($("#java"), 60);
var bash = new Barra($("#bash"), 55);
var laravel = new Barra($("#laravel"), 50);

var slider1 = new Slider(0);
var slider2 = new Slider(1);
var slider3 = new Slider(2);

// =======================================
//			Ejecucion del Slider							
// =======================================
slider1.mostrarDivs(1);
slider2.mostrarDivs(1);
slider3.mostrarDivs(1);

// =======================================
//		   Incrementar Barras							
// =======================================
window.addEventListener("load", () => {
    html.incrementar();
    php.incrementar();
    css.incrementar();
    js.incrementar();
    sql.incrementar();
    java.incrementar();
    bash.incrementar();
    laravel.incrementar();
});

// =======================================
//		Funciones Globales							
// =======================================
function masDivs(numero, slideId) {
    
    if (slideId === 0) {
       slider1.obtenerDivs(numero) 
    }
    
    else if (slideId === 1) {
        slider2.obtenerDivs(numero);
    }

    else {
        slider3.obtenerDivs(numero);
    }
}

function $(selector) {
    return document.querySelector(selector);
}
