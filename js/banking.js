// handel deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the amount deposit input
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = parseFloat(depositInput.value);

    // total deposit 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(depositTotal.innerText);

    depositTotal.innerText = newdepositAmount + previousDepositAmount;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field 
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdrow-btn').addEventListener('click', function () {
    // get the amount withdrow input
    const withdrowInput = document.getElementById('withdrow-input');
    const newWithdrowAmount = parseFloat(withdrowInput.value);

    // total withdrow
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowAmount = parseFloat(withdrowTotal.innerText);

    withdrowTotal.innerText = newWithdrowAmount + previousWithdrowAmount;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear the  withdrow input field 
    withdrowInput.value = '';
});
