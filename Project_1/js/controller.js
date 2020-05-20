/*
    Created on : 18-May-2020, 05:15:59 AM
    Author     : Marcos Freire
    License    : This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
*/

//Make sure the full page is completely loaded
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

//This function controls the the manipulation of the sliders
function colorSlide() {
    
    //Here 3 variables are set with the value established for the IDs of the sliders (input range) from index.html
    const redSlider = document.getElementById('red_range').value;
    const greenSlider = document.getElementById('green_range').value;
    const blueSlider = document.getElementById('blue_range').value;
    
    //Here, this variable just grab the 3 values established from the 3 variables set above
    const colorDisplay = `rgb(${redSlider}, ${greenSlider}, ${blueSlider})`;
    
    //This document method takes the element with ID "color_result" and reset to the value set in colorDisplay (above this line)
    document.getElementById('color_result').style.backgroundColor = colorDisplay;
    
    //Here 3 variables are set to grab the values of the sliders and the name are changed just for better understanding
    const colorRedValue = redSlider;
    const colorGreenValue = greenSlider;
    const colorBlueValue = blueSlider;
    
    //These 3 document methods set the values for the IDs from the 3 variables set above this line
    document.getElementById('red_number').value = colorRedValue;
    document.getElementById('green_number').value = colorGreenValue;
    document.getElementById('blue_number').value = colorBlueValue;
    
    //This document method get the ID "color_value" from index.html and rewrite the default value (Value) whith the RGB Code
    document.getElementById('color_value').innerHTML = colorDisplay;
}
//These 3 document methods call the function colorSlide for each input when the sliders are controled
document.getElementById('red_range').addEventListener('input', colorSlide);
document.getElementById('green_range').addEventListener('input', colorSlide);
document.getElementById('blue_range').addEventListener('input', colorSlide);

//These 3 document methods just disable the 3 input fields of type text of index.html
document.getElementById('red_number').disabled = true;
document.getElementById('green_number').disabled = true;
document.getElementById('blue_number').disabled = true;