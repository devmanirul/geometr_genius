function getValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function triangleCalculate() {
  const base = getValueById("triangle-base");

  const height = getValueById("triangle-height");

  const area = 0.5 * base * height;

  setValueByid("triangleArea", area);
}

function rectangleArea() {
  const width = getValueById("rectangleWidth");
  const height = getValueById("rectangleHeight");
  const area = width * height;

  setValueByid("rectangleArea", area);
}

// function triangleCalculate () {
//     const baseField = document.getElementById("triangle-base");
//     const baseString = baseField.value;
//     const base = parseFloat(baseString);

//     const heightField = document.getElementById("triangle-height");
//     const heightString = heightField.value;
//     const height = parseFloat(heightString);

//     // console.log(base, height);
//     const area = 0.5 * base * height;
//     const areaElement = document.getElementById("triangleArea");
//     areaElement.innerText = area;
// }
