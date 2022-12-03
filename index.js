const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const message = document.querySelector("#error-message");
const noOfNotesList = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    console.log("billAmount.value: " + billAmount.value);
    console.log("cashGiven.value: " + cashGiven.value);
    var billAmountValue = parseInt(billAmount.value);
    var cashGivenValue = parseInt(cashGiven.value);
    if (billAmountValue >= cashGivenValue) {
      console.log("in inner if");
      showMessage("The cash given should be greater than the bill amount.");
    } else {
      console.log("in inner else");
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculateChange(returnAmount) {
  console.log(returnAmount);
  for (var index = 0; index < availableNotes.length; index++) {
    var noOfNotes = Math.trunc(returnAmount / availableNotes[index]);
    var amountLeft = returnAmount % availableNotes[index];
    returnAmount = amountLeft;
    noOfNotesList[index].innerText = noOfNotes;
  }
}
