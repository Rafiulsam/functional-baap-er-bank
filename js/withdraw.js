document.getElementById("btn-withdraw").addEventListener("click", function () {
    const newWithdrawAmount = getInputFieldById('withdraw-field')
    
    if (isNaN(newWithdrawAmount)) {
        alert("Please enter a valid number")
        return;
    }

    const oldWithdrawTotal = getElementFieldById('withdraw-amount')
    
    const oldBalanceTotal = getElementFieldById('balance-amount')
    

    if (newWithdrawAmount > oldBalanceTotal) {
        alert('Baap er bank e eto tk nai')
        return;
    }
    
    const currentWithdraw = newWithdrawAmount + oldWithdrawTotal;
    setElementTextById('withdraw-amount', currentWithdraw);
    const currentBalanceTotal = oldBalanceTotal - newWithdrawAmount;
    setElementTextById('balance-amount', currentBalanceTotal);
})