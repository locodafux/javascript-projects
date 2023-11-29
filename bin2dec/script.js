function binaryToDecimal() {
  var binary = document.getElementById("binary").value;
  var output = document.getElementById("output");

  const arrayBinary = binary.split("");
  var spliceBinary = [];
  for (var i = 0; i < binary.length; i++) {
    if (arrayBinary[i] === "1") {
      spliceBinary = arrayBinary.splice(i, binary - i);
      break;
    }
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
  output.innerHTML = num;
}
