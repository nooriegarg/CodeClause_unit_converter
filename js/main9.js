var input8 = document.getElementById('input8');
var result8 = document.getElementById('result8');
var InputType8 = document.getElementById('InputType8');
var ResultType8 = document.getElementById('ResultType8');
var InputTypeValue8, ResultTypeValue8;

//add listener
input8.addEventListener("keyup",myResult);
InputType8.addEventListener("change",myResult);
ResultType8.addEventListener("change",myResult);

//take initial values
InputTypeValue8 = InputType8.value;
ResultTypeValue8 = ResultType8.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue8 = InputType8.value;
    ResultTypeValue8 = ResultType8.value;

    //----------------------FOR FREQUENCY CONVERTER---------------------


    if(InputTypeValue8 === "hertz" && ResultTypeValue8 === "kilohertz")
      result8.value = Number(input8.value)* 0.001;
    else if(InputTypeValue8 === "hertz" && ResultTypeValue8 === "megahertz")
      result8.value = Number(input8.value)* 1e-6;
    else if(InputTypeValue8 === "hertz" && ResultTypeValue8 === "hertz")
      result8.value = input8.value;
    else if(InputTypeValue8 === "hertz" && ResultTypeValue8 === "gigahertz")
      result8.value = Number(input8.value)* 1e-9;


      if(InputTypeValue8 === "kilohertz" && ResultTypeValue8 === "hertz")
      result8.value = Number(input8.value)* 1000;
    else if(InputTypeValue8 === "kilohertz" && ResultTypeValue8 === "megahertz")
      result8.value = Number(input8.value)* 0.001;
    else if(InputTypeValue8 === "kilohertz" && ResultTypeValue8 === "kilohertz")
      result8.value = input8.value;
    else if(InputTypeValue8 === "kilohertz" && ResultTypeValue8 === "gigahertz")
      result8.value = Number(input8.value)* 1e-6;


      if(InputTypeValue8 === "megahertz" && ResultTypeValue8 === "hertz")
      result8.value = Number(input8.value)* 1e+6;
    else if(InputTypeValue8 === "megahertz" && ResultTypeValue8 === "kilohertz")
      result8.value = Number(input8.value)* 1000;
    else if(InputTypeValue8 === "megahertz" && ResultTypeValue8 === "megahertz")
      result8.value = input8.value;
    else if(InputTypeValue8 === "megahertz" && ResultTypeValue8 === "gigahertz")
      result8.value = Number(input8.value)* 0.001;


      if(InputTypeValue8 === "gigahertz" && ResultTypeValue8 === "hertz")
      result8.value = Number(input8.value)* 1e+9;
    else if(InputTypeValue8 === "gigahertz" && ResultTypeValue8 === "kilohertz")
      result8.value = Number(input8.value)* 1e+6;
    else if(InputTypeValue8 === "gigahertz" && ResultTypeValue8 === "gigahertz")
      result8.value = input8.value;
    else if(InputTypeValue8 === "gigahertz" && ResultTypeValue8 === "megahertz")
      result8.value = Number(input8.value)* 1000;



}