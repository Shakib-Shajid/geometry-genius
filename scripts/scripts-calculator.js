function calculateTriangleArea() {
  // base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  console.log(base);

  // height value
  const triangleHeightField = document.getElementById("triangle-height");
  const heightValueText = triangleHeightField.value;
  const height = parseFloat(heightValueText);
  console.log(height);

  // triangle area
  const area = 0.5 * base * height;
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
}

function calculateRectangleArea() {
  // width value
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);

  // length value
  const lengthField = document.getElementById("rectangle-length");
  const lenghtValueText = lengthField.value;
  const length = parseFloat(lenghtValueText);

  // rectangle area
  const area = width * length;
  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = area;
}
