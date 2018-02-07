var imie;
var nazwisko;
imie = "Janusz";
nazwisko = "Domżał"
document.write(imie);
//+ konkatenacja
document.write("<br>Masz na imie: "+imie);
document.write("<br> Twoje nazwisko: " + nazwisko);
var wiek = 65;
if(wiek<=15)
    document.write("Jesteś dzieckiem");
if(wiek >=65)
    document.write("<br>Masz dużo lat");
    else if(wiek >=18)
document.write("<br>Jesteś pełnoletni");
    else
document.write("<br>Nie jesteś pełnoletni");



//############################################################################################################
var x, y;
x = 10;
y = 5;
var suma = x + y;
alert("Suma wynosi: "+suma);
var roznica = x - y;
var dzielenie;
dzielenie = x / y;
mnozenie = x * y;
modulo = x % y; //* reszta z dzielenia
console.log(modulo);
