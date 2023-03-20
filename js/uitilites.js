function getInputFieldById(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldValue = parseFloat(inputField.value)
    inputField.value = '';
    return inputFieldValue;
}

function getElementFieldById(elementId) {
    const elementField = document.getElementById(elementId)
    const elementFieldText = parseFloat(elementField.innerText)
    return elementFieldText;
}

function setElementTextById(elementId, newValue){
    const elementField =document.getElementById(elementId)
    elementField.innerText = newValue
}

