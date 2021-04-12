var datum = new Date();
var godina = datum.getFullYear();
var text = "Sva Prava Zadrzava Vahid Zekic "

try {

    document.getElementById("textId").innerHTML = text + godina;

    


}
catch (greska) {
    console.log("Greska se desila na fajlu: " + greska.stack);
    console.log("Greska se desila na liniji broj: " + greska.lineNumber);
    console.log("Detaljan opis greske: " + greska.message);
}