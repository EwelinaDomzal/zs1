var a = 10, b = "5a";
var wynik = a + b;
//alert(wynik);
//alert(a + b);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik));

var _zmienna1 = 10;
var zmiennoprzecinkowa = 2.5;
console.log(zmiennoprzecinkowa);
console.log(typeof(zmiennoprzecinkowa)); //number

//bool
//true lub false  prawda lub fałsz
var prawda = true;
var fałsz = false;
console.log(typeof(prawda));


//string
    var imie ='Janusz';
    console.log(typeof(imie)); //string
//undefined
    var nazwisko;
console.log(typeof(nazwisko));

//object
    var tablica =['biały','zielony','czerwony'];
    console.log(tablica);
    console.log(typeof(tablica));
//####################################################################
    //var liczba = prompt('podaj liczbę');
    var wiek1 = prompt('podaj wiek','np. 18');
    console.log('twój wiek:' + wiek1 + ' lat');
    console.log(typeof(wiek1)); //string
    var wiek2 = prompt('podaj wiek');
    var wiek3 = Number(prompt('podaj wiek')); //rzutowanie typu danych na liczbę 
//zamiana typu danych na całkowity
     /*wiek1 = parseInt(wiek1);
    wiek2 = parseInt(wiek2);*/

//zamiana typu danych na zmiennoprzecinkowy
        wiek1 = parseFloat(wiek1);
        wiek2 = parseFloat(wiek2);
    var suma = wiek1 + wiek2 + wiek3;
    var średniwiek = suma / 3;
średniwiek = średniwiek.toFixed(2);
    document.write(wiek1 + ' + ' + wiek2 + ' + ' + wiek3 + ' = ' + suma);
    document.write('<br>średni wiek wynosi: ' + średniwiek + ' lat');
    
    

    

    