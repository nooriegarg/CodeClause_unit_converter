var input2 = document.getElementById('input2');
var result2 = document.getElementById('result2');
var InputType2 = document.getElementById('InputType2');
var ResultType2 = document.getElementById('ResultType2');
var InputTypeValue2, ResultTypeValue2;

//add listener
input2.addEventListener("keyup",myResult);
InputType2.addEventListener("change",myResult);
ResultType2.addEventListener("change",myResult);

//take initial values
InputTypeValue2 = InputType2.value;
ResultTypeValue2 = ResultType2.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue2 = InputType2.value;
    ResultTypeValue2 = ResultType2.value;

    //------------------FOR MASS CONVERTER-------------------------

    if(InputTypeValue2 === "kilogram" && ResultTypeValue2 === "gram")
    result2.value = Number(input2.value)* 1000;
  else if(InputTypeValue2 === "kilogram" && ResultTypeValue2 === "milligram")
    result2.value = Number(input2.value)* 1000000;
  else if(InputTypeValue2 === "kilogram" && ResultTypeValue2 === "kilogram")
    result2.value = input2.value;
    else if(InputTypeValue2 === "kilogram" && ResultTypeValue2 === "microgram")
    result2.value = Number(input2.value)* 1000000000;
  else if(InputTypeValue2 === "kilogram" && ResultTypeValue2 === "imperial ton")
    result2.value = Number(input2.value)* 0.000984207;
  else if(InputTypeValue2 === "kilogram" && ResultTypeValue2 === "stone")
    result2.value = Number(input2.value)* 0.157473;
    else if(InputTypeValue2 === "kilogram" && ResultTypeValue2 === "pound")
    result2.value = Number(input2.value)* 2.20462;
  else if(InputTypeValue2 === "kilogram" && ResultTypeValue2 === "ounce")
    result2.value = Number(input2.value)* 35.274;


    if(InputTypeValue2 === "gram" && ResultTypeValue2 === "kilogram")
    result2.value = Number(input2.value)* 0.001;
  else if(InputTypeValue2 === "gram" && ResultTypeValue2 === "milligram")
    result2.value = Number(input2.value)* 1000;
  else if(InputTypeValue2 === "gram" && ResultTypeValue2 === "gram")
    result2.value = input2.value;
    else if(InputTypeValue2 === "gram" && ResultTypeValue2 === "microgram")
    result2.value = Number(input2.value)* 1000000;
  else if(InputTypeValue2 === "gram" && ResultTypeValue2 === "imperial ton")
    result2.value = Number(input2.value)* 0.00000098421;
  else if(InputTypeValue2 === "gram" && ResultTypeValue2 === "stone")
    result2.value = Number(input2.value)* 0.000157473;
    else if(InputTypeValue2 === "gram" && ResultTypeValue2 === "pound")
    result2.value = Number(input2.value)* 0.00220462;
  else if(InputTypeValue2 === "gram" && ResultTypeValue2 === "ounce")
    result2.value = Number(input2.value)*0.035274;


    if(InputTypeValue2 === "milligram" && ResultTypeValue2 === "kilogram")
    result2.value = Number(input2.value)* 0.000001;
  else if(InputTypeValue2 === "milligram" && ResultTypeValue2 === "gram")
    result2.value = Number(input2.value)* 0.001;
  else if(InputTypeValue2 === "milligram" && ResultTypeValue2 === "milligram")
    result2.value = input.value;
    else if(InputTypeValue2 === "milligram" && ResultTypeValue2 === "microgram")
    result2.value = Number(input2.value)* 1000;
  else if(InputTypeValue2 === "milligram" && ResultTypeValue2 === "imperial ton")
    result2.value = Number(input2.value)* 0.0000000009842;
  else if(InputTypeValue2 === "milligram" && ResultTypeValue2 === "stone")
    result2.value = Number(input2.value)* 0.00000015747;
    else if(InputTypeValue2 === "milligram" && ResultTypeValue2 === "pound")
    result2.value = Number(input2.value)* 0.0000022046;
  else if(InputTypeValue2 === "milligram" && ResultTypeValue2 === "ounce")
    result2.value = Number(input2.value)* 0.000035274;


    if(InputTypeValue2 === "microgram" && ResultTypeValue2 === "gram")
    result2.value = Number(input2.value)* 0.000001;
  else if(InputTypeValue2 === "microgram" && ResultTypeValue2 === "milligram")
    result2.value = Number(input2.value)* 0.001;
  else if(InputTypeValue2 === "microgram" && ResultTypeValue2 === "microgram")
    result.value = input.value;
    else if(InputTypeValue2 === "microgram" && ResultTypeValue2 === "kilogram")
    result2.value = Number(input2.value)* 0.000000001;
  else if(InputTypeValue2 === "microgram" && ResultTypeValue2 === "imperial ton")
    result2.value = Number(input2.value)* 0.00000000000098421;
  else if(InputTypeValue2 === "microgram" && ResultTypeValue2 === "stone")
    result2.value = Number(input2.value)* 0.00000000015747;
    else if(InputTypeValue2 === "microgram" && ResultTypeValue2 === "pound")
    result2.value = Number(input2.value)* 0.0000000022046;
  else if(InputTypeValue2 === "microgram" && ResultTypeValue2 === "ounce")
    result2.value = Number(input2.value)* 0.000000035274;

    if(InputTypeValue2 === "imperial ton" && ResultTypeValue2 === "gram")
    result2.value = Number(input2.value)* 1016000;
  else if(InputTypeValue2 === "imperial ton" && ResultTypeValue2 === "milligram")
    result2.value = Number(input2.value)* 1016000000;
  else if(InputTypeValue2 === "imperial ton" && ResultTypeValue2 === "imperial ton")
    result2.value = input2.value;
    else if(InputTypeValue2 === "imperial ton" && ResultTypeValue2 === "microgram")
    result2.value = Number(input2.value)* 101600000000;
  else if(InputTypeValue2 === "imperial ton" && ResultTypeValue2 === "kilogram")
    result2.value = Number(input2.value)* 1016.05;
  else if(InputTypeValue2 === "imperial ton" && ResultTypeValue2 === "stone")
    result2.value = Number(input2.value)* 160;
    else if(InputTypeValue2 === "imperial ton" && ResultTypeValue2 === "pound")
    result2.value = Number(input2.value)* 2240;
  else if(InputTypeValue2 === "imperial ton" && ResultTypeValue2 === "ounce")
    result2.value = Number(input2.value)* 35840;
  

    if(InputTypeValue2 === "stone" && ResultTypeValue2 === "gram")
    result2.value = Number(input2.value)* 6350.29;
  else if(InputTypeValue2 === "stone" && ResultTypeValue2 === "milligram")
    result2.value = Number(input2.value)* 6350000;
  else if(InputTypeValue2 === "stone" && ResultTypeValue2 === "stone")
    result2.value = input2.value;
    else if(InputTypeValue2 === "stone" && ResultTypeValue2 === "microgram")
    result2.value = Number(input2.value)* 6350000000;
  else if(InputTypeValue2 === "stone" && ResultTypeValue2 === "imperial ton")
    result2.value = Number(input2.value)* 0.00625;
  else if(InputTypeValue2 === "stone" && ResultTypeValue2 === "kilogram")
    result2.value = Number(input2.value)* 6.35029;
    else if(InputTypeValue2 === "stone" && ResultTypeValue2 === "pound")
    result2.value = Number(input2.value)* 14;
  else if(InputTypeValue2 === "stone" && ResultTypeValue2 === "ounce")
    result2.value = Number(input2.value)* 224;

  
    if(InputTypeValue2 === "pound" && ResultTypeValue2 === "gram")
    result2.value = Number(input2.value)* 453.592;
  else if(InputTypeValue2 === "pound" && ResultTypeValue2 === "milligram")
    result2.value = Number(input2.value)* 453592;
  else if(InputTypeValue2 === "pound" && ResultTypeValue2 === "pound")
    result2.value = input2.value;
    else if(InputTypeValue2 === "pound" && ResultTypeValue2 === "microgram")
    result2.value = Number(input2.value)* 453600000;
  else if(InputTypeValue2 === "pound" && ResultTypeValue2 === "imperial ton")
    result2.value = Number(input2.value)* 0.000446429;
  else if(InputTypeValue2 === "pound" && ResultTypeValue2 === "stone")
    result2.value = Number(input22.value)* 0.0714286;
    else if(InputTypeValue2 === "pound" && ResultTypeValue2 === "kilogram")
    result2.value = Number(input2.value)*0.453592;
  else if(InputTypeValue2 === "pound" && ResultTypeValue2 === "ounce")
    result2.value = Number(input2.value)* 16;

  
   if(InputTypeValue2 === "ounce" && ResultTypeValue2 === "gram")
    result.value2 = Number(input2.value)* 28.3495;
  else if(InputTypeValue2 === "ounce" && ResultTypeValue2 === "milligram")
    result2.value = Number(input2.value)* 28349.5;
  else if(InputTypeValue2 === "ounce" && ResultTypeValue2 === "ounce")
    result2.value = input2.value;
    else if(InputTypeValue2 === "ounce" && ResultTypeValue2 === "microgram")
    result2.value = Number(input2.value)* 28350000;
  else if(InputTypeValue2 === "ounce" && ResultTypeValue2 === "imperial ton")
    result2.value = Number(input2.value)*0.000027902;
  else if(InputTypeValue2 === "ounce" && ResultTypeValue2 === "stone")
    result2.value = Number(input2.value)* 0.00446429;
    else if(InputTypeValue2 === "ounce" && ResultTypeValue2 === "pound")
    result2.value = Number(input2.value)* 0.0625;
  else if(InputTypeValue2 === "ounce" && ResultTypeValue2 === "kilogram")
    result2.value = Number(input2.value)* 0.0283495;










    
    

} 