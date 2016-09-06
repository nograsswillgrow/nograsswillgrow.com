function changeMode() {
  var bodyClass = document.body.className;
  var linkClass = document.getElementsByTagName("a");

  if (bodyClass == "") {
    document.body.className = "light";
    for (var i = 0; i < linkClass.length; i++) {
      linkClass[i].className = "light";
    }
    document.getElementById("lights").innerHTML = "light mode";

  } else {
    document.body.className = "";
    for (var i = 0; i < linkClass.length; i++) {
      linkClass[i].className = "";
    }
    document.getElementById("lights").innerHTML = "dark mode";
  }
}
