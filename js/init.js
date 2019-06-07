// =======================================
//		Class Barra									
// =======================================
class Barra {
    
    constructor(selector, limite) {
        this.tiempo = 30
        this.selector = selector;
        this.limite = limite;
    }

    increment() {

        var selector = this.selector;
        var limite = this.limite;
        
        var animation = setInterval(() => {
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
//				Selector							
// =======================================
function $(selector)
{
    return document.querySelector(selector);
}

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

window.addEventListener("load", () => {
    html.increment();
    php.increment();
    css.increment();
    js.increment();
    sql.increment();
    java.increment();
    bash.increment();
    laravel.increment();
});

// =======================================
//				Slider doble							
// =======================================
var slideIndex = [1, 1];
var slideId = ["slide1", "slide2"];

showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n1, n2) 
{
    showDivs(slideIndex[n2] += n1, n2);
}

function showDivs(n1, n2) 
{
    var i;
    var x = document.getElementsByClassName(slideId[n2]);

    if (n1 > x.length) 
    {
        slideIndex[n2] = 1;
    }

    if (n1 < 1)  
    {
        slideIndex[n2] = x.length;
    }

    for (i = 0; i < x.length; i++) 
    {
        x[i].style.display = "none";
    }

    x[slideIndex[n2] - 1].style.display = "block";
}

// =======================================
//         Slider 3											
// =======================================
var index = 1;

mostrarDivs(index);

function masDivs(n) {
    mostrarDivs(index += n);
}

function mostrarDivs(n) {
    var j;
    var y = document.getElementsByClassName("slide3");

    if (n > y.length) {
        index = 1;
    }

    if (n < 1) {
        index = y.length;
    }

    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none";
    }

    y[index -1].style.display = "block";
}
