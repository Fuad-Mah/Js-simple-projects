
const billAmount = document.getElementById("bill");
const percentageAmount = document.getElementById("percentage");
const button = document.getElementById("button");
const spanTotal = document.getElementById("total");

function calculateTotal(){
    const bill = billAmount.value;
    const percentage = percentageAmount.value;
    const total = bill *(1+ percentage / 100);
    spanTotal.innerText = total.toFixed(2);
}

button.addEventListener("click",calculateTotal);

