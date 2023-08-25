//step;1
document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withDrawField = document.getElementById('withdraw-field');
    const newWithDrawString = withDrawField.value;
    const newWithDraw = parseFloat(newWithDrawString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithDraw;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalanceTotal - newWithDraw;
    balanceTotalElement.innerText = currentBalanceTotal;
    withDrawField.value = '';

})