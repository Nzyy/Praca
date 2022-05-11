function bmi() {
document.getElementById("bmi").innerHTML=""

var Wzrost = document.getElementById("wzrost").value
var Masa = document.getElementById("masa").value

var BMI = Masa / Math.pow(Wzrost, 2)

document.getElementById("bmi").innerHTML="Twoje BMI wynosi: " + BMI.toFixed(1)

if (BMI <= 18.4) {
  document.getElementById("bmi").innerHTML+=" - niedowaga"
} else if (BMI <= 24.9) {
  document.getElementById("bmi").innerHTML+=" - norma"
} else if (BMI <= 29.9) {
  document.getElementById("bmi").innerHTML+=" - nadwaga"
} else if (BMI >= 30) {
  document.getElementById("bmi").innerHTML+=" - otyłość"
}
}
