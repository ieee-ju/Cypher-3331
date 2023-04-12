function checkInput() {
  var a = document.getElementById("stageThreeInput");
  if (a.value == "25" || a.value == "Twenty Five") {
    document.getElementById("err").innerHTML =
      "Congratulations, Proceed to the next Stage";
    document.getElementById("proceedToStage4").innerHTML = "Stage 4";
    document.getElementById("proceedToStage4").classList.remove("appear");
    document.getElementById("proceedToStage4").classList.add("btn-primary");
    document.getElementById("proceedToStage4").classList.add("stage4btn");
  } else {
    document.getElementById("err").innerHTML = "wrong";
  }
}
