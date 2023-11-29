function binaryToDecimal() {
  var binary = document.getElementById("binary").value;
  var output = document.getElementById("output");
  var alert = document.getElementById("alert");
  alert.style.display = "none";
  const arrayBinary = binary.split("");

  //validation
  for (var i = 0; i < arrayBinary.length; i++) {
    if (isNaN(arrayBinary[i])) {
      alert.innerHTML = "Please enter only 1's or 0's";
      alert.style.display = "block";
    }
    if (arrayBinary[i] !== "0" && arrayBinary[i] !== "1") {
      alert.innerHTML = "Please enter only 1's or 0's";
      alert.style.display = "block";

      return;
    }
  }

  //Removing 0s before 1s;
  var spliceBinary = [];
  for (var i = 0; i < binary.length; i++) {
    if (arrayBinary[i] === "1") {
      spliceBinary = arrayBinary.splice(i, binary - i);
      break;
    }
  }

  if (spliceBinary.length > 8) {
    alert.innerHTML = "Please input a maximum of eight binary numbers.";
    alert.style.display = "block";
    binary.value = "";
    return;
  }
  var num = 2;
  for (var i = 0; i < spliceBinary.length; i++) {
    if (i === 1) {
      if (spliceBinary[i] === "1") {
        num = 3;
      } else {
        num = 2;
      }
    }

    if (i > 1) {
      if (spliceBinary[i] === "1") {
        num = num * 2;
        num = num + 1;
      } else {
        num = num * 2;
      }
    }
  }
  //output
  output.innerHTML = "Decimal base 10 : " + num;
}
