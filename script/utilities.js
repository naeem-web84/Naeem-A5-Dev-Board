

function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function checkAllButtons() {
    if (buttonOne.disabled && buttonTwo.disabled && buttonThree.disabled && buttonFour.disabled && buttonFive.disabled && buttonSix.disabled) {
        setTimeout(() => {
            alert("All button is clicked");    
        }, 100);
    }
}