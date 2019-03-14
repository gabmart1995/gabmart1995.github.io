/*
    JavaScript version 1.0
    Autor Gabriel Martínez
*/ 

//carga la funcion cuando carga la pagina (Barra de progreso)
window.onload = function() 
{
    var html = document.getElementById('html5');
    var php = document.getElementById('php');
    var css = document.getElementById('css3');
    var js = document.getElementById('js');
    var sql = document.getElementById('sql');
    var java = document.getElementById('java');
    var bash = document.getElementById('bash');
    var laravel = document.getElementById('laravel');

    //html5
    var idInterval = setInterval(function() 
    {
        html.value += 5;

        if (html.value == 90) 
        {   
            clearInterval(idInterval);
        }

    }, 30);

    //php
    var idInterval2 = setInterval(function() 
    {
        php.value += 5;

        if (php.value == 70) 
        {
            clearInterval(idInterval2);
        }

    }, 30);

    //css3
    var idInterval3 = setInterval(function() 
    {
        css.value += 5;

        if (css.value == 50) 
        {
            clearInterval(idInterval3);
        }

    }, 30);

    //js
    var idInterval4 = setInterval(function() 
    {
        js.value += 5;

        if (js.value == 45) 
        {
            clearInterval(idInterval4);
        }

    }, 30);

    //sql
    var idInterval5 = setInterval(function() 
    {
        sql.value += 5;

        if (sql.value == 55) 
        {
            clearInterval(idInterval5);
        }

    }, 30);

    //java
    var idInterval6 = setInterval(function() 
    {
        java.value += 5;

        if (java.value == 60) 
        {
            clearInterval(idInterval6);
        }

    }, 30);

    //bash
    var idInterval7 = setInterval(function() 
    {
        bash.value += 5;

        if (bash.value == 55) 
        {
            clearInterval(idInterval7);
        }

    }, 30);

    //java
    var idInterval8 = setInterval(function() 
    {
        laravel.value += 5;

        if (laravel.value == 50) 
        {
            clearInterval(idInterval8);
        }

    }, 30);
}

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
