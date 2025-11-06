const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const equal = document.getElementById("equal");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Clear screen
clear.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Delete last character
del.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
});

// Evaluate result
equal.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput.replace(/÷/g, "/").replace(/×/g, "*"));
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
  }
});

// Bonus: Keyboard support
document.addEventListener("keydown", e => {
  if (/[0-9+\-*/.]/.test(e.key)) {
    currentInput += e.key;
    display.value = currentInput;
  } else if (e.key === "Enter") {
    try {
      currentInput = eval(currentInput);
      display.value = currentInput;
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (e.key === "Escape") {
    currentInput = "";
    display.value = "";
  }
});
