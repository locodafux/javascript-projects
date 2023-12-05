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

function addNum() {
  display.innerHTML += "+";
  total();
}
function multiplyNum() {
  display.innerHTML += "x";
  total();
}
function total() {
  var total = display.textContent.split("");
  for (var i = 0; i < total.length; i++) {
    if (total[i] === "+") {
      sum(total);
    }
    if (total[i] === "x") {
      product(total);
    }
  }
  total = display.textContent.split("");
}
function sum(total) {
  total = total.join("");
  total = total.split("+");

  var left = Number(total[0]);
  var right = Number(total[1]);

  if (right === "") {
    right = 0;
    display.innerHTML = left + "+";
    return;
  }
  total = left + right;
  display.innerHTML = total.toString() + "+";
}

function product(total) {
  total = total.join("");
  total = total.split("x");

  var left = Number(total[0]);
  var right = Number(total[1]);

  if (right === 0) {
    right = 1;
    display.innerHTML = left + "x";
    return;
  }
  total = left * right;
  display.innerHTML = total.toString() + "x";
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
