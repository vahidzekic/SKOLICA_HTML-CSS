// alert("Sve je OK.")
var naslov = "Grupa 2 - Predavanje 15";

var divKontejner = document.createElement("DIV");
var divZaglavlje = document.createElement("DIV");
var divNavigacija = document.createElement("DIV");
var divSadrzaj = document.createElement("DIV");
var divPodnozje = document.createElement("DIV");


// NAVIGACIJA
var linkPocetna = document.createElement("a");
var linkOnama = document.createElement("a");
var linkKontakt = document.createElement("a");

var textPocetna = document.createTextNode("Pocetna");


var link = document.createElement("img");

try {

    divKontejner.classList.add("kontejner");

    divZaglavlje.classList.add("zaglavlje");
    divKontejner.appendChild(divZaglavlje);


    divNavigacija.classList.add("navigacija");
    linkPocetna.appendChild(textPocetna);
    linkPocetna.setAttribute("href", "index.html");
    divNavigacija.appendChild(linkPocetna);

    divNavigacija.appendChild(linkOnama);

    divNavigacija.appendChild(linkKontakt);

    divKontejner.appendChild(divNavigacija);


    divSadrzaj.classList.add("sadrzaj");
    divKontejner.appendChild(divSadrzaj);

    divPodnozje.classList.add("podnozje");
    divKontejner.appendChild(divPodnozje);


    document.body.appendChild(divKontejner);

    document.getElementById("naslov").innerHTML = naslov;
}
catch(greska){
    console.log("Desila se greska na liniji: " + greska.lineNumber)
}