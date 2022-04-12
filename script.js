/*
NAME:  Kristjan Punno 
ID:    150695211
EMAIL: kpunno@myseneca.ca
DATE:  2022-04-12
*/

// reveals the form pay field upon selecting the "hiring option" of the form
function revealPayField() {
    document.getElementById("pay-label").hidden = false;
    document.getElementById("annual-label").hidden = false;
    const payScaleInput = document.getElementById("pay-input");
    const annualInput = document.getElementById("annual-input");
    annualInput.hidden = false;
    payScaleInput.hidden = false;
    payScaleInput.required = true;

    
}

// hides the form pay field upon selecting question or comment
// hides the checkbox associated with whether rate is hourly / annual
function hidePayField() {
    document.getElementById("pay-label").hidden = true;
    document.getElementById("annual-label").hidden = true;
    const payScaleInput = document.getElementById("pay-input");
    const annualInput = document.getElementById("annual-input");
    payScaleInput.hidden = true;
    payScaleInput.required = false;
    annualInput.checked = false;
    annualInput.hidden = true;

    document.getElementById("hiring").checked = false;
}


