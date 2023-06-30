var input4 = document.getElementById('input4');
var result4 = document.getElementById('result4');
var InputType4= document.getElementById('InputType4');
var ResultType4 = document.getElementById('ResultType4');
var InputTypeValue4, ResultTypeValue4;

//add listener
input4.addEventListener("keyup",myResult);
InputType4.addEventListener("change",myResult);
ResultType4.addEventListener("change",myResult);

//take initial values
InputTypeValue4 = InputType4.value;
ResultTypeValue4 = ResultType4.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue4 = InputType4.value;
    ResultTypeValue4 = ResultType4.value;

    //--------------FOR TEMPERATURE CONVERTER----------------


    if(InputTypeValue4 === "degree celsius" && ResultTypeValue4 === "fahrenheit")
      result4.value = Number(input4.value)* 32;
    else if(InputTypeValue4 === "degree celsius" && ResultTypeValue4 === "kelvin")
      result4.value = Number(input4.value)* 273.15;
    else if(InputTypeValue4 === "degree celsius" && ResultTypeValue4 === "degree celsius")
      result4.value = input4.value;


      if(InputTypeValue4 === "fahrenheit" && ResultTypeValue4 === "degree celsius")
      result4.value = Number(input4.value)* -17.7778;
    else if(InputTypeValue4 === "fahrenheit" && ResultTypeValue4 === "kelvin")
      result4.value = Number(input4.value)* 255.372;
    else if(InputTypeValue4 === "fahrenheit" && ResultTypeValue4 === "fahrenheit")
      result4.value = input4.value;


      if(InputTypeValue4 === "kelvin" && ResultTypeValue4 === "degree celsius")
      result4.value = Number(input4.value)* -273.15;
    else if(InputTypeValue4 === "kelvin" && ResultTypeValue4 === "fahrenheit")
      result4.value = Number(input4.value)* -459.67;
    else if(InputTypeValue4 === "kelvin" && ResultTypeValue4 === "kelvin")
      result4.value = input4.value;


}