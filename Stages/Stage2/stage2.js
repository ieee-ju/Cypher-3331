function checkInput() {
  var a = document.getElementById("stageTwoInput");
  if (a.value == "SCREEN TOP RIGHT") {
    document.getElementById("err").innerHTML =
      "Congratulations, Proceed to the next Stage";
    document.getElementById("proceedToStage3").innerHTML = "Stage 3";
    document.getElementById("proceedToStage3").classList.remove("appear");
    document.getElementById("proceedToStage3").classList.add("proceed-stage-3");
  } else {
    document.getElementById("err").innerHTML = "Wrong Answer :(";
  }
}

function showTextField() {
  document.getElementById("show-now").classList.remove("appear");
}
