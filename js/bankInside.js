document.getElementById('deposit-button').addEventListener('click', function () {
    const depositeField = document.getElementById('deposit-field');
    const depositeValueString = depositeField.value;
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalElementString = depositTotal.innerText;
    const newDepositValue = parseFloat(depositeValueString);
    const previousDepositeTotal = parseFloat(depositTotalElementString);


    const totalDeposit = newDepositValue + previousDepositeTotal;
    depositTotal.innerText = totalDeposit;

    const balance = document.getElementById('balance');
    const balanceInnerTextString = balance.innerText;
    const newBalance = parseFloat(balanceInnerTextString);
    balance.innerText = totalDeposit;
    const curretNewBalance = newBalance + newDepositValue;
    balance.innerText = curretNewBalance;






    depositeField.value = '';
})









