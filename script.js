let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");
const equal = document.querySelector(".equal");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

equal.addEventListener("click", () => {
  if (currentNum != "" && previousNum != "") {
    calculate();
  }
});

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});


function handleNumber(number) {
  if (previousNum !== "" && currentNum !== "" && operator === "") {
    previousNum = "";
    currentDisplayNumber.textContent = currentNum;
  }
  if (currentNum.length <= 15) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  }
}

function handleOperator(op) {
  if (previousNum === "") {
    previousNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === "") {
    operatorCheck(op);
  } else {
    calculate();
    operator = 0;
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = previousNum + " " + operator;
  }
}


function operatorCheck(text) {
  operator = text;
  previousDisplayNumber.textContent = previousNum + " " + operator;
  currentDisplayNumber.textContent = "0";
  currentNum = "";
}

function calculate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);
  if (previousNum == "5" && currentNum == "5" && operator === "+") {
    previousNum = "Patata";
    displayResults();
  } 
  previousNum = roundNumber(previousNum);
  previousNum = previousNum.toString();
  displayResults();
}

function displayResults() {
  if (previousNum.length <= 15) {
    currentDisplayNumber.textContent = previousNum;
    currentDisplayNumber.classList.add("rojo");
  } currentDisplayNumber.addEventListener("click", showVideo);
  previousDisplayNumber.textContent = "";
  operator = "";
  currentNum = "";
}

function showVideo() {
 const videoEl = document.getElementsByTagName('video')[0];
 var sourceEl = videoEl.getElementsByTagName('source')[0];
 sourceEl.src = "video.mp4";
 videoEl.classList.add("show");
 videoEl.load();
}