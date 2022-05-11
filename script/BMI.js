function bmi() {
document.getElementById("bmi").innerHTML=""

var Wzrost = document.getElementById("wzrost").value
var Masa = document.getElementById("masa").value

if (Wzrost == "") {
  if (Masa == "") {
    document.getElementById("bmi").innerHTML="Niepoprawnie podano wzrost oraz wagę"
} else {
  document.getElementById("bmi").innerHTML="Niepoprawnie podano wzrost"
}

} else {
  if (Masa == "") {
    document.getElementById("bmi").innerHTML="Niepoprawnie podano wagę"
  } else {
    var BMI = Masa / Math.pow(Wzrost, 2)

    if (BMI <= 18.4) {
      document.getElementById("bmi").innerHTML="Twoje BMI wynosi: " + BMI.toFixed(2) + " - niedowaga"
    } else if (BMI <= 24.9) {
      document.getElementById("bmi").innerHTML="Twoje BMI wynosi: " + BMI.toFixed(2) + " - norma"
    } else if (BMI <= 29.9) {
      document.getElementById("bmi").innerHTML="Twoje BMI wynosi: " + BMI.toFixed(2) + " - nadwaga"
    } else if (BMI >= 30) {
      document.getElementById("bmi").innerHTML="Twoje BMI wynosi: " + BMI.toFixed(2) + " - otyłość"
    }
    }
  }
}
