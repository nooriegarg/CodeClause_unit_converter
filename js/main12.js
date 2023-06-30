var input11 = document.getElementById('input11');
var result11 = document.getElementById('result11');
var InputType11 = document.getElementById('InputType11');
var ResultType11 = document.getElementById('ResultType11');
var InputTypeValue11, ResultTypeValue11;

//add listener
input11.addEventListener("keyup",myResult);
InputType11.addEventListener("change",myResult);
ResultType11.addEventListener("change",myResult);

//take initial values
InputTypeValue11 = InputType11.value;
ResultTypeValue11 = ResultType11.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue11 = InputType11.value;
    ResultTypeValue11 = ResultType11.value;

    //---------------------FOR DIGITAL STORAGE CONVERTER----------------


    if(InputTypeValue11 === "bit" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 0.001;
    else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 1e-6;
    else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "bit")
      result11.value = input11.value;
    else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 1e-9;
      else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 1e-12;
    else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*0.125;
      else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 0.000125;
    else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*1.25e-7;
      else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 1.25e-10;
    else if(InputTypeValue11 === "bit" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*1.25e-13;


      if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)* 1000;
    else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 0.001;
    else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "kilobit")
      result11.value = input11.value;
    else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 1e-6;
      else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 1e-9;
    else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*125;
      else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 0.125;
    else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*0.000125;
      else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 1.25e-7;
    else if(InputTypeValue11 === "kilobit" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*1.25e-10;


      if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 1000;
    else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)* 1e+6;
    else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "megabit")
      result11.value = input11.value;
    else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 0.001;
      else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 1e-6;
    else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*125000;
      else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 125;
    else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*0.125;
      else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 0.000125;
    else if(InputTypeValue11 === "megabit" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*1.25e-7;


      if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 1e+6;
    else if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 1000;
    else if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "gigabit")
      result11.value = input11.value;
    else if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)* 1e+9;
      else if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 0.001;
    else if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*1.25e+8;
      else if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 125000;
    else if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*125;
      else if(InputTypeValue11 === "gigabit" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 0.125;
    else if(InputTypeValue11 === "gigabitbit" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*0.000125;


      if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 1e+9;
    else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 1e+6;
    else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "terabit")
      result11.value = input11.value;
    else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 1000;
      else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)* 1e+12;
    else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*1.25e+11;
      else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 1.25e+8;
    else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*125000;
      else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 125;
    else if(InputTypeValue11 === "terabit" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*0.125;


      if(InputTypeValue11 === "byte" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 0.008;
    else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 8e-6;
    else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "byte")
      result11.value = input11.value;
    else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 8e-9;
      else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 8e-12;
    else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)*8;
      else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 0.001;
    else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*1e-6;
      else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 1e-9;
    else if(InputTypeValue11 === "byte" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*1e-12;


      if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 8;
    else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 0.008;
    else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "kilobyte")
      result11.value = input11.value;
    else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 8e-6;
      else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 8e-9;
    else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*1000;
      else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)* 8000;
    else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*0.001;
      else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 1e-6;
    else if(InputTypeValue11 === "kilobyte" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*1e-9;


      if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 8000;
    else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 8;
    else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "megabyte")
      result11.value = input11.value;
    else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 0.008;
      else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 8e-6;
    else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*8e-6;
      else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 1000;
    else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)*8e+6;
      else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 0.001;
    else if(InputTypeValue11 === "megabyte" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*1e-6;


      if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 8e+6;
    else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 8000;
    else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "gigabyte")
      result11.value = input11.value;
    else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 8;
      else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 0.008;
    else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*1e+9;
      else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 1e+6;
    else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*1000;
      else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)* 8e+9;
    else if(InputTypeValue11 === "gigabyte" && ResultTypeValue11 === "terabyte")
      result11.value = Number(input11.value)*0.001;


      if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "kilobit")
      result11.value = Number(input11.value)* 8e+12;
    else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "megabit")
      result11.value = Number(input11.value)* 8e+6;
    else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "terabyte")
      result11.value = input11.value;
    else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "gigabit")
      result11.value = Number(input11.value)* 8000;
      else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "terabit")
      result11.value = Number(input11.value)* 8;
    else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "byte")
      result11.value = Number(input11.value)*1e+12;
      else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "kilobyte")
      result11.value = Number(input11.value)* 1e+9;
    else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "megabyte")
      result11.value = Number(input11.value)*1e+6;
      else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "gigabyte")
      result11.value = Number(input11.value)* 1000;
    else if(InputTypeValue11 === "terabyte" && ResultTypeValue11 === "bit")
      result11.value = Number(input11.value)*8e+12;


}
     