/*
    JavaScript version 2.0
    Autor Gabriel Martínez
*/ 
function $(selector)
{
    return document.querySelector(selector);
}

//Objeto Bar
(function()
{
    self.Bar = function(selector, limite)
    {
        this.tiempo = 30;
        this.selector = selector;
        this.limite = limite
    }

    //añade el objeto a la funcion
    self.Bar.prototype = 
    { 
        increment : function()
        {
            let lim = this.limite;
            let etiq = this.selector;
    
            let animacion = setInterval(function()
            {
                if (etiq.value <= lim)
                {
                    etiq.value += 5;
                }

                else 
                {
                    clearInterval(animacion);
                }

            }, this.tiempo);
        }
    }
})();

//instanciacion de objetos
var html = new Bar($("#html5"), 90);
var php = new Bar($("#php"), 70);
var css = new Bar($("#css3"), 50);
var js = new Bar($("#js"), 75);
var sql = new Bar($("#sql"), 55);
var java = new Bar($("#java"), 60);
var bash = new Bar($("#bash"), 55);
var laravel = new Bar($("#laravel"), 50);

window.addEventListener("load", function()
{
    html.increment();
    php.increment();
    css.increment();
    js.increment();
    sql.increment();
    java.increment();
    bash.increment();
    laravel.increment();
});

//Sliders
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

var index = 1;
mostrarDivs(index);

function masDivs(n) 
{
    mostrarDivs(index += n);
}

function mostrarDivs(n)
{
    var j;
    var y = document.getElementsByClassName("slide3");

    if (n > y.length) 
    {
        index = 1;
    }

    if (n < 1)
    {
        index = y.length;
    }

    for (j = 0; j < y.length; j++)
    {
        y[j].style.display = "none";
    }

    y[index -1].style.display = "block";
} 
//endSliders
