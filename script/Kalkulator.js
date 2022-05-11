function Calc0() {
document.getElementById("Dzialania").innerHTML+="0"
}

function Calc1() {
document.getElementById("Dzialania").innerHTML+="1"
}

function Calc2() {
document.getElementById("Dzialania").innerHTML+="2"
}

function Calc3() {
document.getElementById("Dzialania").innerHTML+="3"
}

function Calc4() {
document.getElementById("Dzialania").innerHTML+="4"
}

function Calc5() {
document.getElementById("Dzialania").innerHTML+="5"
}

function Calc6() {
document.getElementById("Dzialania").innerHTML+="6"
}

function Calc7() {
document.getElementById("Dzialania").innerHTML+="7"
}

function Calc8() {
document.getElementById("Dzialania").innerHTML+="8"
}

function Calc9() {
document.getElementById("Dzialania").innerHTML+="9"
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
Liczba2 += parseInt(Wartosc2)
Wynik = (Liczba1 + Liczba2)
document.getElementById("Dzialania").innerHTML=Wynik
}
