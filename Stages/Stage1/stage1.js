function checkInput() {
  var a = document.getElementById("stageOneInput");
  if (a.value == "w" || a.value == "W") {
    document.getElementById("err").innerHTML =
      "Congratulations, Proceed to the next Stage";
    document.getElementById("proceedToStage2").innerHTML = "Stage 2";
    document.getElementById("proceedToStage2").classList.remove("appear");
    document.getElementById("proceedToStage2").classList.add("btn-stage-2");
  } else {
    document.getElementById("err").innerHTML = "wrong";
  }
}
