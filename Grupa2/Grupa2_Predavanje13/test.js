document.getElementById("naslov").innerHTML = "Grupa 2 - Predavanje 17";

var vreme = new Date();
var godina = vreme.getFullYear();

var x = 10;
var y = 7;
var zbir = x + y;
var razlika = x - y;
var poruka1 = "Broj " + x + " je manji od broja " + y + ".";
var poruka2 = "Broj " + x + " je veci od broja " + y + ".";


document.getElementById("p1").innerHTML = "Prvi broj: " + x;
document.getElementById("p2").innerHTML = "Drugi broj: " + y;
document.getElementById("p4").innerHTML = "Sva prava zadrzava Novi Pazar " + godina + ".";

try {

    if (x < y) {
        document.getElementById("p3").innerHTML = poruka1;
    }
    else {
        documentuu.getElementById("p3").innerHTML = poruka2;
    }

}
catch(greska){
    console.log("Desila se greshka na liniji " + greska.lineNumber)
    console.log("Poruka o greshci: " + greska.message)
    console.log("Fajl sa greshkom se nalazi na lokaciji: " + greska.stack)
}