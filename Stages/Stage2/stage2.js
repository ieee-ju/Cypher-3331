function checkInput() {
  var a = document.getElementById("stageTwoInput");
  if (a.value == "SCREEN TOP RIGHT" || a.value == "screen top right") {
    location.href = "/Stages/Stage3/stage3.html";
  } else {
    document.getElementById("err").innerHTML = "Wrong Answer :(";
  }
}

function showTextField() {
  document.getElementById("show-now").classList.remove("appear");
}
