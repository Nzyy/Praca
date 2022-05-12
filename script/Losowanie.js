function losowanie() {
const Tab = []

var start = document.getElementById("od").value
var stop = document.getElementById("do").value

if (start == "") {
  if (stop == "") {
    alert("Podaj 'Od:' oraz 'Do:'")
  } else {
      if (stop <= 0) {
        alert("Podaj 'Od', zmień wartość 'Do:' na > 0")
      } else {
        alert("Podaj 'Od:'")
      }
    }
} else {
  if (start <= 0) {
  if (stop == "") {
    alert("Podaj 'Do:', zmień wartość 'Od:' na > 0")
  } else if (stop <= 0) {
      alert("Podaj wartości > 0")
    } else {
      alert("Zmień wartość 'Od:' na > 0")
      }
  } else {
    if (stop == "") {
      alert("Podaj 'Do:'")
    } else if (stop <= 0) {
      alert("Zmień wartość 'Do:' na > 0")
    } else {
      let uwu = stop - start + 1
      var WL = Math.floor(Math.random() * uwu)
      for (start; start<=stop; start++) {
        Tab.push(start)
      }
        for (var a = 1; a <= 10; a++) {
        if (document.getElementById(a).innerHTML != "b/d") {
        } else {
          document.getElementById(a).innerHTML=Tab[parseInt(WL)]
          if (a == 10) {
              document.getElementById("ocena").innerHTML="Poproszę o 6 sorko <3"
              document.getElementById("ab").innerHTML="⠄⠄⡌⠄⢰⠉⢙⢗⣲⡖⡋⢐⡺⡄⠈⢆⠄⠄⠄"
              document.getElementById("ac").innerHTML="⠄⡜⠄⢀⠆⢠⣿⣿⣿⣿⢡⢣⢿⡱⡀⠈⠆⠄⠄"
              document.getElementById("ad").innerHTML="⠄⠧⠤⠂⠄⣼⢧⢻⣿⣿⣞⢸⣮⠳⣕⢤⡆⠄⠄"
              document.getElementById("ae").innerHTML="⢺⣿⣿⣶⣦⡇⡌⣰⣍⠚⢿⠄⢩⣧⠉⢷⡇⠄⠄"
              document.getElementById("af").innerHTML="⠘⣿⣿⣯⡙⣧⢎⢨⣶⣶⣶⣶⢸⣼⡻⡎⡇⠄⠄"
              document.getElementById("ag").innerHTML="⠄⠘⣿⣿⣷⡀⠎⡮⡙⠶⠟⣫⣶⠛⠧⠁⠄⠄⠄"
              document.getElementById("ah").innerHTML="⠄⠄⠘⣿⣿⣿⣦⣤⡀⢿⣿⣿⣿⣄⠄⠄⠄⠄⠄"
              document.getElementById("ai").innerHTML="⠄⠄⠄⠈⢿⣿⣿⣿⣿⣷⣯⣿⣿⣷⣾⣿⣷⡄⠄"
              document.getElementById("aj").innerHTML="⠄⠄⠄⠄⠄⢻⠏⣼⣿⣿⣿⣿⡿⣿⣿⣏⢾⠇⠄"
              document.getElementById("ak").innerHTML="⠄⠄⠄⠄⠄⠈⡼⠿⠿⢿⣿⣦⡝⣿⣿⣿⠷⢀⠄"
              document.getElementById("al").innerHTML="⠄⠄⠄⠄⠄⠄⡇⠄⠄⠄⠈⠻⠇⠿⠋⠄⠄⢘⡆"
              document.getElementById("am").innerHTML="⠄⠄⠄⠄⠄⠄⠱⣀⠄⠄⠄⣀⢼⡀⠄⢀⣀⡜⠄"
              document.getElementById("an").innerHTML="⠄⠄⠄⠄⠄⠄⠄⢸⣉⠉⠉⠄⢀⠈⠉⢏⠁⠄⠄"
              document.getElementById("ao").innerHTML="⠄⠄⠄⠄⠄⠄⡰⠃⠄⠄⠄⠄⢸⠄⠄⢸⣧⠄⠄"
              document.getElementById("au").innerHTML="⠄⠄⠄⠄⠄⣼⣧⠄⠄⠄⠄⠄⣼⠄⠄⡘⣿⡆⠄"
              document.getElementById("ap").innerHTML="⠄⠄⠄⢀⣼⣿⡙⣷⡄⠄⠄⠄⠃⠄⢠⣿⢸⣿⡀"
              document.getElementById("ar").innerHTML="⠄⠄⢀⣾⣿⣿⣷⣝⠿⡀⠄⠄⠄⢀⡞⢍⣼⣿⠇"
              document.getElementById("as").innerHTML="⠄⠄⣼⣿⣿⣿⣿⣿⣷⣄⠄⠄⠠⡊⠴⠋⠹⡜⠄"
              document.getElementById("at").innerHTML="⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⡆⣤⣾⣿⣿⣧⠹⠄⠄"
              document.getElementById("auu").innerHTML="⠄⠄⢿⣿⣿⣿⣿⣿⣿⣿⢃⣿⣿⣿⣿⣿⡇⠄⠄"
              document.getElementById("aw").innerHTML="⠄⠄⠐⡏⠉⠉⠉⠉⠉⠄⢸⠛⠿⣿⣿⡟⠄⠄⠄"
              document.getElementById("ax").innerHTML="⠄⠄⠄⠹⡖⠒⠒⠒⠒⠊⢹⠒⠤⢤⡜⠁⠄⠄⠄"
          }
          break
        }
        }
      }
    }
  }
}
