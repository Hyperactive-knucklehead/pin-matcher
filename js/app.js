// /*-----------------My style---------------*/

// function generatePin() {
//   const pinField = document.getElementById("display-pin");
//   pinField.value = Math.round(Math.random() * 9000) + 1000;
// }
// document.getElementById("keypad").addEventListener("click", function (event) {
//   const number = event.target.innerText;
//   const calcInput = document.getElementById("typed-numbers");
//   if (isNaN(number)) {
//     if (number == "C") {
//       calcInput.value = "";
//       document.getElementById("matched").classList.add("d-none");
//       document.getElementById("didn't-match").classList.add("d-none");
//     }
//   } else {
//     const previousNumber = calcInput.value;
//     const newNumber = previousNumber + number;
//     calcInput.value = newNumber;
//   }
// });
// function verifyPin() {
//   const generatedPin = document.getElementById("display-pin").value;
//   const typedNumbers = document.getElementById("typed-numbers").value;
//   if (generatedPin == typedNumbers) {
//     document.getElementById("matched").classList.remove("d-none");
//     document.getElementById("didn't-match").classList.add("d-none");
//   } else {
//     document.getElementById("didn't-match").classList.remove("d-none");
//     document.getElementById("matched").classList.add("d-none");
//   }
// }

/*-----------------Jhankar style---------------*/
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
document.getElementById("keypad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
      document.getElementById("matched").classList.add("d-none");
      document.getElementById("didn't-match").classList.add("d-none");
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  const generatedPin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  if (generatedPin == "" && typedNumbers == "") {
    console.log("You didn't generate the pin yet");
  } else if (generatedPin == typedNumbers) {
    document.getElementById("matched").classList.remove("d-none");
    document.getElementById("didn't-match").classList.add("d-none");
  } else {
    document.getElementById("didn't-match").classList.remove("d-none");
    document.getElementById("matched").classList.add("d-none");
    const actionTry = document.getElementById("try");
    const actionTryText = actionTry.innerText;
    const actionTryNumber = parseInt(actionTryText);
    if (actionTryNumber == 1) {
      document.getElementById("action-remain").classList.add("d-none");
      document.getElementById("disabled").setAttribute("disabled", true);
      document.getElementById("disabled").classList.add("bg-danger");
      document.getElementById("didn't-match").innerText =
        "❌ Pin Didn't Match, Please try again after 10 seconds";
      setTimeout(function () {
        var element = document.getElementById("disabled");
        element.disabled = false;
        document.getElementById("disabled").classList.remove("bg-danger");
        const actionRemain = document.getElementById("action-remain");
        actionRemain.classList.remove("d-none");
        actionTry.innerText = 3;
        document.getElementById("didn't-match").innerText =
          "❌ Pin Didn't Match, Please try again ";
      }, 10000);
    }

    actionTry.innerText = actionTryNumber - 1;
  }
}
