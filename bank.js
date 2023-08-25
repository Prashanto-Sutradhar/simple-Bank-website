document.getElementById('btn-deposit').addEventListener('click', function() {

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step : get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step:4 add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total 
    depositTotalElement.innerText = currentDepositTotal;


    // step 5:get balance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})