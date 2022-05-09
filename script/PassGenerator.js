function haslo() {
  const Tab_Let = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const Tab_Let1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  document.getElementById("haslo").innerHTML=""

  var Znaki = document.getElementById("liczba").value

  for (var i = 0; i < Znaki; i++) {
  var Random = (Math.floor(Math.random()*2+1))
  var a = (Math.floor(Math.random()*25+0))

  if (Random == 1) {
  document.getElementById("haslo").innerHTML+=Math.floor(Math.random()*9+0)
  }
  else {
    var Random = (Math.floor(Math.random()*2+1))
    if (Random == 1) {
    document.getElementById("haslo").innerHTML+=Tab_Let[a]
    } else {
    document.getElementById("haslo").innerHTML+=Tab_Let1[a]
  }}}
}
