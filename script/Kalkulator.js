function Calc(Liczba) {
document.getElementById("Dzialania").innerHTML+=Liczba
}

function CalcPLUS() {
  if (document.querySelector("#Dzialania").innerHTML == "") {
} else {
    var Wartosc1 = document.querySelector("#Dzialania").innerHTML
    Liczba1 += parseInt(Wartosc1)
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
var Wartosc = document.querySelector("#Dzialania").innerHTML
if (Wartosc == "") {
  } else {
  var Wartosc = (Wartosc.slice(0, -1))
  document.getElementById("Dzialania").innerHTML=Wartosc
  }
}

function CalcDot() {
}

function CalcResult() {


var Wartosc2 = document.querySelector("#Dzialania").innerHTML
if (Wartosc2 == "") {

  } else {
Liczba2 += parseInt(Wartosc2)
Wynik = (Liczba1 + Liczba2)
document.getElementById("Dzialania").innerHTML=Wynik
}}
