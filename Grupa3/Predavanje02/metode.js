console.log("JavaScript je ucitan");

var niz = [4, 1, 78, 9, 5, 3, 2]

// alert(niz.sort())

function mojaMetoda() {
    alert("Ovo je moja metoda.");
}



function sabiranje(x, y, g) {

    var z = x + y + g ;

    alert(z);
}


function pozivaSabiranje() {
    sabiranje(5, 9, 7);
}


var divSadrzaj = document.createElement("DIV");
var parText = document.createElement("p");
var textPar = document.createTextNode("Ovo je HTML nacrtan iz JavaScript-a");


function sadrzajPocetna() {
    document.body.innerHTML = " ";

    divSadrzaj.setAttribute("id", "sadrzajId");
    divSadrzaj.classList.add("sadrzaj");
    document.body.appendChild(divSadrzaj);

    parText.classList.add("mojaKlasa");
    parText.appendChild(textPar);
    document.getElementById("sadrzajId").appendChild(parText);


}