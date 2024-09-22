function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText ;
    const textNumber = parseFloat(textValue);
    return textNumber
}

function showSectionById(id){
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}
