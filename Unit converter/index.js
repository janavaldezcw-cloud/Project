const inputNumber = document.getElementById("inputDisplay");

function numberCoverter(covertNumber) {
  const n = Number(covertNumber); // convert input string to number

  return {
    meterToFeet: (n * 3.281).toFixed(3),
    feetToMeter: (n / 3.281).toFixed(3),

    literToGallon: (n * 0.264).toFixed(3),
    gallonToLiter: (n / 0.264).toFixed(3),

    kilogramToPound: (n * 2.204).toFixed(3),
    poundTokilogram: (n / 2.204).toFixed(3),

    input: n.toFixed(3), // optional: formatted input for display
    rawInput: n          // optional: raw number
  };
}

function renderHmtl(covertNumber, conv) {
  const lengthValue = document.getElementById("lengthValue");
  const volumeValue = document.getElementById("volumeValue");
  const massValue = document.getElementById("massValue");

  lengthValue.innerHTML =
    `${covertNumber} meters = ${conv.meterToFeet} feet | ${covertNumber} feet = ${conv.feetToMeter} meters`;

  volumeValue.innerHTML =
    `${covertNumber} liters = ${conv.literToGallon} gallons | ${covertNumber} gallons = ${conv.gallonToLiter} liters`;

  massValue.innerHTML =
    `${covertNumber} kilos = ${conv.kilogramToPound} pounds | ${covertNumber} pounds = ${conv.poundTokilogram} kilos`;
}

function opBtn() {
  const covertBtn = document.getElementById("covertbtn");

  covertBtn.addEventListener("click", () => {
    const covertNumber = Number(inputNumber.value);

    const conv = numberCoverter(covertNumber);
    renderHmtl(covertNumber, conv);
  });
}

opBtn();
