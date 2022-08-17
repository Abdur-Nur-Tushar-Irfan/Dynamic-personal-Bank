document.getElementById('withdraw-button').addEventListener('click', function () {
    const withDrawField = document.getElementById('withdraw-field');
    const WithDrawValueString = withDrawField.value;
    const newWithDrawValue = parseFloat(WithDrawValueString);


    const withDrawTotal = document.getElementById('withdraw-total');
    const withDrawString = withDrawTotal.innerText;
    const previousWithDraw = parseFloat(withDrawString);


    const totalWithDraw = previousWithDraw + newWithDrawValue;
    withDrawTotal.innerText = totalWithDraw;


    withDrawField.value = '';

    const balanceTotalElement = document.getElementById('balance');
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);

    const TotalBalance = previousBalanceTotal - newWithDrawValue;
    balanceTotalElement.innerText = TotalBalance;












})