// Function to calculate factorial iteratively
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate factorial recursively
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Input validation to ensure a valid positive integer
function isValidInput(input) {
    return Number.isInteger(input) && input >= 0;
}

// Event listener for the Calculate button
document.getElementById("calculateBtn").addEventListener("click", function() {
    const userInput = document.getElementById("number").value;
    const number = parseInt(userInput);

    if (!isValidInput(number)) {
        alert("Please enter a valid positive integer.");
        return;
    }

    const iterativeResult = factorialIterative(number);
    const recursiveResult = factorialRecursive(number);

    document.getElementById("iterativeResult").textContent = iterativeResult;
    document.getElementById("recursiveResult").textContent = recursiveResult;
});
