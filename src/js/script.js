function triangleCalculate () {
    const baseField = document.getElementById("triangle-base");
    const baseString = baseField.value;
    const base = parseFloat(baseString);

    const heightField = document.getElementById("triangle-height");
    const heightString = heightField.value;
    const height = parseFloat(heightString);

    console.log(base, height);
}