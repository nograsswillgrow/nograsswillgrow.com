function changeMode() {
  var bodyClass = document.body.className;
  var linkClass = document.getElementsByTagName("a");

  if (bodyClass == "") {
    document.body.className = "dark";
    for (var i = 0; i < linkClass.length; i++) {
      linkClass[i].className = "dark";
    }
    document.getElementById("lightswitch").innerHTML = "Turn on the lights?";

  } else {
    document.body.className = "";
    for (var i = 0; i < linkClass.length; i++) {
      linkClass[i].className = "";
    }
    document.getElementById("lightswitch").innerHTML = "Turn off the lights?";
  }
}
