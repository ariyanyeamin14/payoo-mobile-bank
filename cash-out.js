document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = getInputValueById('cash-out-input');
    const cashOutPin = getInputValueById('cash-out-pin-number-input');
    const balanceAmmount = getTextValueById('balance-ammount');

    if(isNaN(cashOut)){
        alert('Faild to cash out');
        return
    }

    if(cashOut > balanceAmmount){
        alert('Cash Out faild');
        return
    }

    if(cashOutPin === 1234){
        
        const newBalance = balanceAmmount - cashOut;

        document.getElementById('balance-ammount').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class='text-2xl font-bold'>Cash Out</h4>
            <p> ${cashOut} .New Balance ${newBalance}</p>
        `;
        
        document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('Wrong PIN Number. Use 1234 as PIN')
    }
})