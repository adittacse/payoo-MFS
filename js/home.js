const validPinNumber = 1234;

// function to get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// function to get innerText in number
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const elementTextNumber = parseInt(elementText);
    return elementTextNumber;
}

// function to set innerText
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("available-balance");
    availableBalanceElement.innerText = value;
}

// add money feature
document.getElementById("btn-add-money").addEventListener("click", function(event) {
    event.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = getInputValueNumber("add-amount");
    const pinNumber = getInputValueNumber("add-pin");
    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    if (pinNumber !== validPinNumber) {
        alert("Invalid Pin Number");
        return;
    }

    const totalAvailableBalance = addAmount + availableBalance;
    setInnerText(totalAvailableBalance);
});


// cash out money feature
document.getElementById("btn-withdraw").addEventListener("click", function(event) {
    event.preventDefault();
    
    const agentNumber = document.getElementById("agent-number").value;
    const withdrawAmount = getInputValueNumber("withdraw-amount");
    const pinNumber = getInputValueNumber("withdraw-pin");
    const availableBalance = getInnerText("available-balance");
    
    if (agentNumber.length !== 11) {
        alert("Invalid Agent Number");
        return;
    }

    if (pinNumber !== validPinNumber) {
        alert("Invalid Pin Number");
        return;
    }

    const totalAvailableBalance = availableBalance - withdrawAmount;
    setInnerText(totalAvailableBalance);
});


// toggling feature
document.getElementById("add-money").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out").addEventListener("click", function() {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
});

