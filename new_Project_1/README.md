# New Project 1 - Color Selector

## (Just for fun - enjoy £;D)

###### Script Preview
```javascript

/*
    Created on : 29-May-2020, 05:15:59 AM
    Author     : Marc Freir
    License    : This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
*/

//Make sure the full page is completely loaded
window.addEventListener('load', () => {
    console.log('page is fully loaded');
    mapElements();
    syncRanges();
});

//Globals
//For the sliders
let inputRangeRed = null;
let inputRangeGreen = null;
let inputRangeBlue = null;

//For the values
let inputTextRed = null;
let inputTextGreen = null;
let inputTextBlue = null;

//For the output
let div_output_color = null;

//For RGB
let r = '255';
let g = '123';
let b = '0';

//Map each element by id
function mapElements() {
    //Set to the "inputRanges" variables the the id "iinputRanges" from the HTML file
    inputRangeRed = document.querySelector('#inputRangeRed');
    inputRangeGreen = document.querySelector('#inputRangeGreen');
    inputRangeBlue = document.querySelector('#inputRangeBlue');

    //Set to the "inputTexts" variables the the id "inputTexts" from the HTML file
    inputTextRed = document.querySelector('#inputTextRed');
    inputTextGreen = document.querySelector('#inputTextGreen');
    inputTextBlue = document.querySelector('#inputTextBlue');

    //Set to the "div_output_color" variable the the id "output_color" from the HTML file
    div_output_color = document.querySelector('#output_color');

    //Changes the value of each slider (ranges) via function "handleInputRangeChange"
    inputRangeRed.addEventListener('change', handleInputRangeChange);
    inputRangeGreen.addEventListener('change', handleInputRangeChange);
    inputRangeBlue.addEventListener('change', handleInputRangeChange);
}

//Set new values to each slider (range)
function handleInputRangeChange(event) {
    const value = event.target.value;
    const id = event.target.id;

    //Just for debuging
    console.log(id);
    //Switch the value of each slider (range) based on each inputRange set respectively
    switch (id) {
        case 'inputRangeRed':
            r = value;
            break;    
        case 'inputRangeGreen':
            g = value;
            break;
        case 'inputRangeBlue':
            b = value;
            break;
    }
    //Just for debuging
    console.log(`${r} ${g} ${b}`);

    //Change properties of background of the output_color calling the function "syncRanges"
    syncRanges();
}



//Set new css rules to the output_color
function syncRanges() {
    div_output_color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    div_output_color.style.backgroundImage = "none";
    div_output_color.style.boxShadow = "none";

    const colorRGBDisplay = `${r}, ${g}, ${b}`;
    //Change the values of the inputTexts
    inputTextRed.value = r;
    inputTextGreen.value = g;
    inputTextBlue.value = b;

    document.querySelector('#resultValue').innerHTML = `rgb(${colorRGBDisplay})`;
}

```
