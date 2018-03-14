var blok1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var imie=document.getElementById('imie');
var inner= document.getElementById('inner');
var content= document.getElementById('content');

b2.innerHTML ='Poznań';
blok1.innerHTML = 'nowy tekst';
blok1.innerHTML ='Swarzędz';
    var miasto = prompt('Podaj ulubione miasto');
    b3.innerHTML= miasto;

var stolica = 'Gniezno';
b4.innerHTML = stolica;
    imie.textContent = 'Janusz';

//różnica pomiędzy textContent a innerHTML
inner.innerHTML = '<h1><u>inner</h1></u>';
content.textContent = '<h1>content</h1>'
