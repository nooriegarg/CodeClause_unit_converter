var input7 = document.getElementById('input7');
var result7 = document.getElementById('result7');
var InputType7 = document.getElementById('InputType7');
var ResultType7 = document.getElementById('ResultType7');
var InputTypeValue7, ResultTypeValue7;

//add listener
input7.addEventListener("keyup",myResult);
InputType7.addEventListener("change",myResult);
ResultType7.addEventListener("change",myResult);

//take initial values
InputTypeValue7 = InputType7.value;
ResultTypeValue7 = ResultType7.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue7 = InputType7.value;
    ResultTypeValue7 = ResultType7.value;

    //--------------------FOR PRESSURE CONVERTER----------------------


    if(InputTypeValue7 === "bar" && ResultTypeValue7 === "pascal")
      result7.value = Number(input7.value)* 100000;
    else if(InputTypeValue7 === "bar" && ResultTypeValue7 === "pound per square inch")
      result7.value = Number(input7.value)* 14.5038;
    else if(InputTypeValue7 === "bar" && ResultTypeValue7 === "bar")
      result7.value = input7.value;
    else if(InputTypeValue7 === "bar" && ResultTypeValue7 === "standard atmosphere")
      result7.value = Number(input7.value)* 0.98692505107328;
    else if(InputTypeValue7 === "bar" && ResultTypeValue7 === "torr")
      result7.value = Number(input7.value)* 750.06303893413360129;


      if(InputTypeValue7 === "pascal" && ResultTypeValue7 === "bar")
      result7.value = Number(input7.value)* 1e-5;
    else if(InputTypeValue7 === "pascal" && ResultTypeValue7 === "pound per square inch")
      result7.value = Number(input7.value)* 0.000145038;
    else if(InputTypeValue7 === "pascal" && ResultTypeValue7 === "pascal")
      result7.value = input7.value;
    else if(InputTypeValue7 === "pascal" && ResultTypeValue7 === "standard atmosphere")
      result7.value = Number(input7.value)* 9.869250513319517e-6;
    else if(InputTypeValue7 === "pascal" && ResultTypeValue7 === "torr")
      result7.value = Number(input7.value)* 0.0075006303913072430029;


      if(InputTypeValue7 === "pound per square inch" && ResultTypeValue7 === "pascal")
      result7.value = Number(input7.value)* 6894.76;
    else if(InputTypeValue7 === "pound per square inch" && ResultTypeValue7 === "bar")
      result7.value = Number(input7.value)* 0.0689476;
    else if(InputTypeValue7 === "pound per square inch" && ResultTypeValue7 === "pound per square inch")
      result7.value = input7.value;
    else if(InputTypeValue7 === "pound per square inch" && ResultTypeValue7 === "standard atmosphere")
      result7.value = Number(input7.value)* 0.068046;
    else if(InputTypeValue7 === "pound per square inch" && ResultTypeValue7 === "torr")
      result7.value = Number(input7.value)* 51.7149;


      if(InputTypeValue7 === "standard atmosphere" && ResultTypeValue7 === "pascal")
      result7.value = Number(input7.value)* 101325;
    else if(InputTypeValue7 === "standard atmosphere" && ResultTypeValue7 === "pound per square inch")
      result7.value = Number(input7.value)* 14.6959;
    else if(InputTypeValue7 === "standard atmosphere" && ResultTypeValue7 === "standard atmosphere")
      result7.value = input7.value;
    else if(InputTypeValue7 === "standard atmosphere" && ResultTypeValue7 === "bar")
      result7.value = Number(input7.value)* 1.01325;
    else if(InputTypeValue7 === "standard atmosphere" && ResultTypeValue7 === "torr")
      result7.value = Number(input7.value)* 760;


      if(InputTypeValue7 === "torr" && ResultTypeValue7 === "pascal")
      result7.value = Number(input7.value)* 133.322;
    else if(InputTypeValue7 === "torr" && ResultTypeValue7 === "pound per square inch")
      result7.value = Number(input7.value)* 0.0193368;
    else if(InputTypeValue7 === "torr" && ResultTypeValue7 === "torr")
      result7.value = input7.value;
    else if(InputTypeValue7 === "torr" && ResultTypeValue7 === "standard atmosphere")
      result7.value = Number(input7.value)* 0.00131579;
    else if(InputTypeValue7 === "torr" && ResultTypeValue7 === "bar")
      result7.value = Number(input7.value)* 0.00133322;




}