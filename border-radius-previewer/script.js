var form = document.getElementById("form");
var tLeft = document.getElementById("top-left");
var tRight = document.getElementById("top-right");
var bRight = document.getElementById("bottom-right");
var bLeft = document.getElementById("bottom-left");

var alert1 = document.getElementById("alert-1");
var alert2 = document.getElementById("alert-2");
var alert3 = document.getElementById("alert-3");
var alert4 = document.getElementById("alert-4");

alert1.style.display = "none";
alert2.style.display = "none";
alert3.style.display = "none";
alert4.style.display = "none";

function changeBorderRadius() {
  alert1.style.display = "none";
  alert2.style.display = "none";
  alert3.style.display = "none";
  alert4.style.display = "none";

  function checkNum(value) {
    arrayValue = value.split("");

    for (var i = 0; i < arrayValue.length; i++) {
      if (isNaN(arrayValue[i])) {
        return false;
      }
    }
    return true;
  }

  if (tLeft.value === "") {
    alert1.innerHTML = "Please enter a value";
    alert1.style.display = "block";
    tLeft.value === "";
  }

  if (tRight.value === "") {
    alert2.innerHTML = "Please enter a value";
    alert2.style.display = "block";
  }

  if (bRight.value === "") {
    alert3.innerHTML = "Please enter a value";
    alert3.style.display = "block";
  }
  if (bLeft.value === "") {
    alert4.innerHTML = "Please enter a value";
    alert4.style.display = "block";
  }

  if (!checkNum(tLeft.value)) {
    alert1.innerHTML = "Please enter numbers only";
    alert1.style.display = "block";
  }

  if (!checkNum(tRight.value)) {
    alert2.innerHTML = "Please enter numbers only";
    alert2.style.display = "block";
  }
  if (!checkNum(bRight.value)) {
    alert3.innerHTML = "Please enter numbers only";
    alert3.style.display = "block";
  }

  if (!checkNum(bLeft.value)) {
    alert4.innerHTML = "Please enter numbers only";
    alert4.style.display = "block";
  }
  document.getElementById(
    "box"
  ).style.borderRadius = `${tLeft.value}px ${tRight.value}px ${bRight.value}px ${bLeft.value}px`;
}
