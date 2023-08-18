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
  addToCalculationEntry("Triangle", area);
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

  // valid check
  if (isNaN(width) || isNaN(length)) {
    alert("please insert number");
    return;
  }

  // rectangle area
  const area = width * length;
  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = area;
  addToCalculationEntry("Rectangle", area);
}

function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");
  const area = 3.14 * majorRadius * minorRadius;
  const areaTwoDecimal = area.toFixed(2);

  setElementInnerText("ellipse-area", areaTwoDecimal);
  addToCalculationEntry("Ellipse", area);
}

// reuseable function

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  if (isNaN(base) || isNaN(height)) {
    alert("please insert number");
  }
  const area = base * height;
  setElementInnerText("parallelogram-area", area);

  //   add to calculation entry

  addToCalculationEntry("parallelogram", area);
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

// add to calculation enrty

function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-4");
  //   p.innerHTML = areaType + " " + area;
  p.innerHTML = `${
    count + 1
  }. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-secondary">Convert</button>`;
  calculationEntry.appendChild(p);
}
