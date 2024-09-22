document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputValueById('add-money-input');
    const pinNumber = getInputValueById('pin-number-input');

    if(isNaN(addMoney)){
        alert('Faild to add money');
        return;
    }
    
    if(pinNumber === 1234){
        const balanceAmmount = getTextValueById('balance-ammount');
        const newBalance = balanceAmmount + addMoney ;

        document.getElementById('balance-ammount').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `Added ${addMoney}, New Balance ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p)
    }
    else{
        alert('Wrong PIN Number. Use 1234 as PIN ')
    }

})