function checkInput() {
  var a = document.getElementById("stageOneInput");
  if (a.value == "w" || a.value == "W") {
    location.href = "/Stages/Stage2/stage2.html";
  } else {
    document.getElementById("err").innerHTML = "Wrong Answer :(";
  }
}
