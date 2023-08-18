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

function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");
  const area = 3.44 * majorRadius * minorRadius;

  setElementInnerText("ellipse-area", area);
}

// reuseable function

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  //   console.log(base);

  const length = getInputValue("parallelogram-height");
  //   console.log(length);

  const area = base * length;
  setElementInnerText("parallelogram-area", area);
}

// reuseable get input function

function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// reuseable set span
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
