const validPinNumber = 1234;

document.getElementById("btn-add-money").addEventListener("click", function(event) {
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (accountNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    if (pinNumber !== validPinNumber) {
        alert("Invalid Pin Number");
        return;
    }

    const totalAvailableBalance = addAmount + availableBalance;
    document.getElementById("available-balance").innerText = totalAvailableBalance;
});