var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var zero = document.getElementById("zero");
var C = document.getElementById("C");
var AC = document.getElementById("AC");
var display = document.getElementById("display");
var display = document.getElementById("display");
var plus = document.getElementById("+");
var times = document.getElementById("x");
var minus = document.getElementById("-");
var divide = document.getElementById("/");
var equals = document.getElementById("=");

var operators = ["+", "-", "/", "*"];
console.log("wow");
seven.addEventListener("click", sevenNum);
eight.addEventListener("click", eightNum);
nine.addEventListener("click", nineNum);

four.addEventListener("click", fourNum);
five.addEventListener("click", fiveNum);
six.addEventListener("click", sixNum);

one.addEventListener("click", oneNum);
two.addEventListener("click", twoNum);
three.addEventListener("click", threeNum);
zero.addEventListener("click", zeroNum);

C.addEventListener("click", clear);
AC.addEventListener("click", clearAll);
plus.addEventListener("click", addNum);
times.addEventListener("click", multiplyNum);
divide.addEventListener("click", divideNum);
minus.addEventListener("click", subtractNum);
equals.addEventListener("click", equalsNum);

function equalsNum() {
  if (total(display.textContent) === undefined) {
  } else {
    display.innerHTML = total(display.textContent);
  }
}
function addNum() {
  if (total(display.textContent) === undefined) {
  } else {
    display.innerHTML = total(display.textContent);
  }

  display.innerHTML += "+";
}
function total(display) {
  var text = display.split("");
  console.log(text);

  for (var i = 0; i < text.length; i++) {
    if (text[i] === "+") {
      var total = text.join("");

      total = total.split("+");

      var left = Number(total[0]);
      var right = Number(total[1]);

      return left + right;
    }

    if (text[i] === "x") {
      var total = text.join("");

      total = total.split("x");

      var left = Number(total[0]);
      var right = Number(total[1]);

      return left * right;
    }

    if (text[i] === "/") {
      var total = text.join("");

      total = total.split("/");

      var left = Number(total[0]);
      var right = Number(total[1]);

      return left / right;
    }

    if (text[i] === "-") {
      var total = text.join("");
      total = total.split("-");

      var left = Number(total[0]);
      var right = Number(total[1]);

      return left - right;
    }
  }
}

function subtractNum() {
  if (total(display.textContent) === undefined) {
  } else {
    display.innerHTML = total(display.textContent);
  }

  display.innerHTML += "-";
}

function multiplyNum() {
  if (total(display.textContent) === undefined) {
  } else {
    display.innerHTML = total(display.textContent);
  }

  display.innerHTML += "x";
}

function divideNum() {
  if (total(display.textContent) === undefined) {
  } else {
    display.innerHTML = total(display.textContent);
  }

  display.innerHTML += "/";
}
function sevenNum() {
  display.innerHTML += "7";
}
function eightNum() {
  display.innerHTML += "8";
}
function nineNum() {
  display.innerHTML += "9";
}
function fourNum() {
  display.innerHTML += "4";
}
function fiveNum() {
  display.innerHTML += "5";
}
function sixNum() {
  display.innerHTML += "6";
}
function oneNum() {
  display.innerHTML += "1";
}
function twoNum() {
  display.innerHTML += "2";
}
function threeNum() {
  display.innerHTML += "3";
}
function zeroNum() {
  display.innerHTML += "0";
}
function clear() {
  var text = display.textContent;
  display.innerHTML = text.slice(0, -1);
}
function clearAll() {
  display.innerHTML = "";
}
