const monthNames = ["01", "02", "03", "04",
"05", "06", "07", "08", "09", "10", "11", "12"]

var Data = new Date()
var Year = Data.getFullYear()
var Month = monthNames[Data.getMonth()]
var Day = Data.getDate()
var Hour = Data.getHours()
var Minute = Data.getMinutes()
var Second = Data.getSeconds()

if (Minute < 10) {
  Minute = "0" + Minute
}

if (Second < 10) {
  Second = "0" + Second
}

let Liczba1 = 0
var Liczba2 = 0

document.getElementById("TodayDate").innerHTML=Year
document.getElementById("TodayMonth").innerHTML=Month
document.getElementById("TodayDay").innerHTML=Day
document.getElementById("TodayHour").innerHTML=Hour
document.getElementById("TodayMinute").innerHTML=Minute
document.getElementById("TodaySecond").innerHTML=Second

