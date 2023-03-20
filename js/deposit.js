document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldById('deposit-field')
    
    if(isNaN(newDepositAmount)){
        alert("Please enter a valid number")
        return;
    }

    if(newDepositAmount <= 0){
        alert(' Baap er bank e 1 takar niche deposit hoy na')
        return;
    }

    const oldDepositTotal = getElementFieldById('deposit-amount')

    const currentDepositTotal = newDepositAmount + oldDepositTotal;

    setElementTextById('deposit-amount', currentDepositTotal);

    const oldBalanceTotal = getElementFieldById('balance-amount')
    
    const currentBalanceTotal = oldBalanceTotal + newDepositAmount;
    
    setElementTextById("balance-amount", currentBalanceTotal)
    

})