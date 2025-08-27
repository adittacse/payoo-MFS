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

// function to display form (toggle)
function handleToggle(id) {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

// function to set active toggle style
function handleToggleStyle(id) {
    const activeClasses = document.getElementsByClassName("active");
    for (const activeClass of activeClasses) {
        activeClass.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        activeClass.classList.add("border-[#0808081a]");
    }
    document.getElementById(id).classList.remove("border-[#0808081a]");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// function to set active toggle title
function handleToggleTitle(id) {
    const activeParagraph = document.getElementsByClassName("active-p");
    for (const active of activeParagraph) {
        active.classList.remove("text-[#0874f2]", "font-semibold");
        active.classList.add("text-[#080808b3]");
    }
    document.getElementById(id).classList.remove("text-[#080808b3]");
    document.getElementById(id).classList.add("text-[#0874f2]", "font-semibold");
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
    handleToggle("add-money-parent");
    handleToggleStyle("add-money");
    handleToggleTitle("add-money-title");
});

document.getElementById("cash-out").addEventListener("click", function() {
    handleToggle("cash-out-parent");
    handleToggleStyle("cash-out");
    handleToggleTitle("cash-out-title");
});

document.getElementById("transfer-money").addEventListener("click", function() {
    handleToggle("transfer-money-parent");
    handleToggleStyle("transfer-money");
    handleToggleTitle("transfer-money-title");
});

document.getElementById("get-bonus").addEventListener("click", function() {
    handleToggle("get-bonus-parent");
    handleToggleStyle("get-bonus");
    handleToggleTitle("get-bonus-title");
});
