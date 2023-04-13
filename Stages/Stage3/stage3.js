function checkInput() {
  var a = document.getElementById("stageThreeInput");
  if (a.value == "25" || a.value == "Twenty Five") {
    location.href = "/Stages/Stage4/stage4.html";
  } else {
    document.getElementById("err").innerHTML = "Wrong Answer :(";
  }
}
