var Wynik = 0

function Calc(Liczba) {
document.getElementById("Dzialania").innerHTML+=Liczba
}

function CalcPLUS() {
if (document.querySelector("#Dzialania").innerHTML != "") {
  Wynik = Wynik + parseInt(document.querySelector("#Dzialania").innerHTML)
  document.getElementById("Dzialania").innerHTML=""
  }
}

function CalcMINUS() {
}

function CalcMULTIPLY() {
}

function CalcDIVIDE() {
}

function CalcC() {
  var Ekran = document.getElementById("Dzialania").innerHTML
  document.getElementById("Dzialania").innerHTML=Ekran.slice(0, -1)
  }

function CalcDot() {
//   if (document.getElementById("Dzialania").innerHTML != "") {
//     if (document.getElementById("Dzialania").innerHTML.includes(".") == false) {
//     document.getElementById("Dzialania").innerHTML+="."
// }
// }
}

function CalcResult() {
if (document.getElementById("Dzialania").innerHTML != "") {
  Wynik = Wynik + parseInt(document.getElementById("Dzialania").innerHTML)
  document.getElementById("Dzialania").innerHTML=Wynik
} else {
  document.getElementById("Dzialania").innerHTML=Wynik
}}
