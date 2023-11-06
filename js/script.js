document.getElementById("checkButton").addEventListener("click", checkTriangle);

function checkTriangle() {
  const side1 = parseFloat(document.getElementById("side1").value);
  const side2 = parseFloat(document.getElementById("side2").value);
  const side3 = parseFloat(document.getElementById("side3").value);

  if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
    document.getElementById("result").textContent = "Invalid input. Please enter positive numbers.";
    return;
}

if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    document.getElementById("result").textContent = "Not a triangle.";
    return;
}

let triangleType;

}
