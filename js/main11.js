var input10 = document.getElementById('input10');
var result10 = document.getElementById('result10');
var InputType10 = document.getElementById('InputType10');
var ResultType10 = document.getElementById('ResultType10');
var InputTypeValue10, ResultTypeValue10;

//add listener
input10.addEventListener("keyup",myResult);
InputType10.addEventListener("change",myResult);
ResultType10.addEventListener("change",myResult);

//take initial values
InputTypeValue10 = InputType10.value;
ResultTypeValue10 = ResultType10.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue10 = InputType10.value;
    ResultTypeValue10 = ResultType10.value;

    //-----------------FOR PLANE ANGLE CONVERTER----------------


    if(InputTypeValue10 === "degree" && ResultTypeValue10 === "gradian")
      result10.value = Number(input10.value)* 1.11111;
    else if(InputTypeValue10 === "degree" && ResultTypeValue10 === "radian")
      result10.value = Number(input10.value)* 0.0174533;
    else if(InputTypeValue10 === "degree" && ResultTypeValue10 === "degree")
      result10.value = input10.value;
    else if(InputTypeValue10 === "degree" && ResultTypeValue10 === "arcsecond")
      result10.value = Number(input10.value)* 3600;


    if(InputTypeValue10 === "gradian" && ResultTypeValue10 === "degree")
      result10.value = Number(input10.value)* 0.9;
    else if(InputTypeValue10 === "gradian" && ResultTypeValue10 === "radian")
      result10.value = Number(input10.value)* 0.015708;
    else if(InputTypeValue10 === "gradian" && ResultTypeValue10 === "gradian")
      result10.value = input10.value;
    else if(InputTypeValue10 === "gradian" && ResultTypeValue10 === "arcsecond")
      result10.value = Number(input10.value)* 3240;


    if(InputTypeValue10 === "radian" && ResultTypeValue10 === "gradian")
      result10.value = Number(input10.value)* 63.662;
    else if(InputTypeValue10 === "radian" && ResultTypeValue10 === "degree")
      result10.value = Number(input10.value)* 57.2958;
    else if(InputTypeValue10 === "radian" && ResultTypeValue10 === "radian")
      result10.value = input10.value;
    else if(InputTypeValue10 === "radian" && ResultTypeValue10 === "arcsecond")
      result10.value = Number(input10.value)* 206265;


    if(InputTypeValue10 === "arcsecond" && ResultTypeValue10 === "gradian")
      result10.value = Number(input10.value)* 0.000308642;
    else if(InputTypeValue10 === "arcsecond" && ResultTypeValue10 === "radian")
      result10.value = Number(input10.value)* 4.8481e-6;
    else if(InputTypeValue10 === "arcsecond" && ResultTypeValue10 === "arcsecond")
      result10.value = input10.value;
    else if(InputTypeValue10 === "arcsecond" && ResultTypeValue10 === "degree")
      result10.value = Number(input10.value)* 0.000277778;




}


    