const getOperator = document.querySelectorAll("#operator-button");
const operatorButtonContainer = document.querySelector("#calculator-operator-button-container");
const numberButtonContainer = document.querySelector("#calculator-number-button-container");
const numberButtons = document.querySelector("#number-buttons");
const displayText = document.querySelector("#display-text");
const seven = document.querySelector("#seven");
const clearButton = document.querySelector("#clear-button");
const equalsButton = document.querySelector("#equals-button");
const deleteButton = document.querySelector("#delete-button");
const percentButton = document.querySelector("#percent-button");

const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return y - x;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return y / x;
}

let operator;
let storeOperatorValue;
let firstNumber;
let nextNumber;

const operate = (operator, firstNumber, nextNumber) => {
    if (operator === "+") {
        return add(firstNumber, nextNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, nextNumber);
    } else if (operator === "x") {
        return multiply(firstNumber, nextNumber);
    } else if (operator === "/") {
        return divide(firstNumber, nextNumber);
    }
};

let numberArray = []; //array used to push the value clicked by the user - that array then has join and parseInt called on it produce an integer value for calculation

numberButtons.addEventListener("click", (e) => {
    let target = e.target;

    if (numberArray.length > 8) {
        alert("Number can not be more than 8 digits long");
        numberArray = [0]
        firstNumber = "";
        nextNumber = "";
        displayText.textContent = 0;  
    } else if (typeof firstNumber === "number" && typeof nextNumber === "number") {
        storeOperatorValue = operator;
    }

    storeOperatorValue = operator;
    numberArray.push(target.textContent);
    firstNumber = parseInt(numberArray.join(''));
    displayText.textContent = firstNumber; 
});

equalsButton.addEventListener("click", () => {
    if (typeof nextNumber !== "number") { 
        console.log("This will eventually just become something like 'return firstNumber + 0;'");
    } else {
        firstNumber = Math.round(operate(operator, firstNumber, nextNumber) * 1000) / 1000;
        displayText.textContent = firstNumber;
        nextNumber = "";
    }
});

operatorButtonContainer.addEventListener("click", (e) => {
    let target = e.target;
    operator = target.textContent;
    
    
    if (typeof firstNumber !== "number") {
        alert("Please Select A Number Before Selecting An Operator");
        numberArray = [0]
        firstNumber = "";
        nextNumber = "";
        displayText.textContent = 0;  
    } else if (typeof nextNumber !== "number") {
        nextNumber = firstNumber;
        firstNumber = "";
        numberArray = []; 
    } else { 
        console.log(storeOperatorValue);
        firstNumber = Math.round(operate(storeOperatorValue, firstNumber, nextNumber) * 1000) / 1000;
        nextNumber = firstNumber;
        displayText.textContent = firstNumber;
        firstNumber = "";
        numberArray = [];
    }
});


clearButton.addEventListener("click", () => {
    numberArray = [0]
    firstNumber = "";
    nextNumber = "";
    displayText.textContent = 0;  
});

deleteButton.addEventListener("click", () => {
    console.log(numberArray);
    numberArray.pop(); //remove the last index of the array'
    if(numberArray.length === 0) {
        numberArray[0] = 0; // if deleting the last index in the array leaves an empty array, change the array to have a 0th index with value 0 to update both first number and display correctly
    }
    console.log(numberArray);
    firstNumber = parseInt(numberArray.join(''));
    displayText.textContent = firstNumber; 
})

let counter = 0;

percentButton.addEventListener("click", percentButtonActive);

function percentButtonActive() {
    counter++;
    if (counter === 1) {
        alert("I don't do anything, you definitely shouldn't click me again.");
    } else if (counter === 2) {
        alert("Alright fine, I lied. Don't click me again though, I'm serious.");
    } else if (counter === 3) {
        alert ("What's your problem dude? Learn to respect boundaries.");
    } else if (counter === 4) {
        alert ("...");
    } else if (counter === 5) {
        alert ("...");
    } else if (counter === 6) {
        alert ("That's it...");
    } else if (counter === 7) {
        document.body.innerHTML = "";
    }
}
