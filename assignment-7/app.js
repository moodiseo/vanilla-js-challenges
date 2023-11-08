const numForm = document.querySelector("#num-form");
const numInput = document.querySelector("#num-form input");

const numForm2 = document.querySelector("#num-form2");
const numInput2 = document.querySelector("#num-form2 input");

const drawMachine = document.querySelector("#choiceResult");
const drawResult = document.querySelector("#Result");

const HIDDEN_CLASSNAME = "hidden";

function numForm2Submit(event) {
  event.preventDefault();
  drawMachine.classList.remove(HIDDEN_CLASSNAME);
  drawResult.classList.remove(HIDDEN_CLASSNAME);
  const chosenNumber = parseInt(numInput2.value);
  const rangeNumber = parseInt(numInput.value);
  const machineNumber = Math.ceil(Math.random() * rangeNumber);
  drawMachine.innerText = `You chose: ${chosenNumber}, the machine chose: ${machineNumber}.`;
  if (chosenNumber === machineNumber) {
    drawResult.innerText = "You Won!";
  } else {
    drawResult.innerText = "You lost!";
  }
}

numForm2.addEventListener("submit", numForm2Submit);
