

function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerText(id,value) {
    document.getElementById(id).innerText = value;
}