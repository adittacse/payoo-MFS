const validPinNumber = 1234;

// add money feature
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


// cash out money feature
document.getElementById("btn-withdraw").addEventListener("click", function(event) {
    event.preventDefault();
    
    const agentNumber = document.getElementById("agent-number").value;
    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (agentNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    if (pinNumber !== validPinNumber) {
        alert("Invalid Pin Number");
        return;
    }

    const totalAvailableBalance = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText = totalAvailableBalance;
});


// toggling feature
document.getElementById("add-money").addEventListener("click", function() {
    // document.getElementById("add-money").style.backgroundColor = "bg-[#0874f20d]";
    // document.getElementById("add-money").style.color = "#0874f2";
    // document.getElementById("add-money").style.fontWeight = "600";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out").addEventListener("click", function() {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
});

