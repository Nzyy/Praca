function bmi() {
document.getElementById("bmi").innerHTML=""

var Wzrost = document.getElementById("wzrost").value
var Masa = document.getElementById("masa").value

var BMI = Masa / Math.pow(Wzrost, 2)

document.getElementById("bmi").innerHTML=BMI
}
