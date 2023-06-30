var input9 = document.getElementById('input9');
var result9 = document.getElementById('result9');
var InputType9 = document.getElementById('InputType9');
var ResultType9 = document.getElementById('ResultType9');
var InputTypeValue9, ResultTypeValue9;

//add listener
input9.addEventListener("keyup",myResult);
InputType9.addEventListener("change",myResult);
ResultType9.addEventListener("change",myResult);

//take initial values
InputTypeValue9 = InputType9.value;
ResultTypeValue9 = ResultType9.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue9 = InputType9.value;
    ResultTypeValue9 = ResultType9.value;

    //--------------------FOR ENERGY CONVERTER----------------------


    if(InputTypeValue9 === "joule" && ResultTypeValue9 === "kilojoule")
      result9.value = Number(input9.value)* 0.001;
    else if(InputTypeValue9 === "joule" && ResultTypeValue9 === "gram calorie")
      result9.value = Number(input9.value)* 0.239006;
    else if(InputTypeValue9 === "joule" && ResultTypeValue9 === "joule")
      result9.value = input9.value;
    else if(InputTypeValue9 === "joule" && ResultTypeValue9 === "kilo calorie")
      result9.value = Number(input9.value)* 0.000239006;
    else if(InputTypeValue9 === "joule" && ResultTypeValue9 === "watt hour")
      result9.value = Number(input9.value)* 0.000277778;
    else if(InputTypeValue9 === "joule" && ResultTypeValue9 === "kilowatt hour")
      result9.value = Number(input9.value)*2.7778e-7;
    else if(InputTypeValue9 === "joule" && ResultTypeValue9 === "electronvolt")
      result9.value = Number(input9.value)* 6.242e+18;


    if(InputTypeValue9 === "kilojoule" && ResultTypeValue9 === "joule")
      result9.value = Number(input9.value)* 1000;
    else if(InputTypeValue9 === "kilojoule" && ResultTypeValue9 === "gram calorie")
      result9.value = Number(input9.value)* 100239.006;
    else if(InputTypeValue9 === "kilojoule" && ResultTypeValue9 === "kilojoule")
      result9.value = input9.value;
    else if(InputTypeValue9 === "kilojoule" && ResultTypeValue9 === "kilo calorie")
      result9.value = Number(input9.value)* 0.239006;
    else if(InputTypeValue9 === "kilojoule" && ResultTypeValue9 === "watt hour")
      result9.value = Number(input9.value)* 0.277778;
    else if(InputTypeValue9 === "kilojoule" && ResultTypeValue9 === "kilowatt hour")
      result9.value = Number(input9.value)*0.000277778;
    else if(InputTypeValue9 === "kilojoule" && ResultTypeValue9 === "electronvolt")
      result9.value = Number(input9.value)* 6.242e+21;


    if(InputTypeValue9 === "gram calorie" && ResultTypeValue9 === "kilojoule")
      result9.value = Number(input9.value)* 0.004184;
    else if(InputTypeValue9 === "gram calorie" && ResultTypeValue9 === "joule")
      result9.value = Number(input9.value)* 4.184;
    else if(InputTypeValue9 === "gram calorie" && ResultTypeValue9 === "gram calorie")
      result9.value = input9.value;
    else if(InputTypeValue9 === "gram calorie" && ResultTypeValue9 === "kilo calorie")
      result9.value = Number(input9.value)* 0.001;
    else if(InputTypeValue9 === "gram calorie" && ResultTypeValue9 === "watt hour")
      result9.value = Number(input9.value)* 0.00116222;
    else if(InputTypeValue9 === "gram calorie" && ResultTypeValue9 === "kilowatt hour")
      result9.value = Number(input9.value)*1.1622e-6;
    else if(InputTypeValue9 === "gram calorie" && ResultTypeValue9 === "electronvolt")
      result9.value = Number(input9.value)* 2.611e+19;


    if(InputTypeValue9 === "watt hour" && ResultTypeValue9 === "kilojoule")
      result9.value = Number(input9.value)*3.6;
    else if(InputTypeValue9 === "watt hour" && ResultTypeValue9 === "gram calorie")
      result9.value = Number(input9.value)* 860.421;
    else if(InputTypeValue9 === "watt hour" && ResultTypeValue9 === "watt hour")
      result9.value = input9.value;
    else if(InputTypeValue9 === "watt hour" && ResultTypeValue9 === "kilo calorie")
      result9.value = Number(input9.value)* 0.860421;
    else if(InputTypeValue9 === "watt hour" && ResultTypeValue9 === "joule")
      result9.value = Number(input9.value)* 3600;
    else if(InputTypeValue9 === "watt hour" && ResultTypeValue9 === "kilowatt hour")
      result9.value = Number(input9.value)*0.001;
    else if(InputTypeValue9 === "watt hour" && ResultTypeValue9 === "electronvolt")
      result9.value = Number(input9.value)* 2.247e+22;


    if(InputTypeValue9 === "kilowatt hour" && ResultTypeValue9 === "kilojoule")
      result9.value = Number(input9.value)*3600;
    else if(InputTypeValue9 === "kilowatt hour" && ResultTypeValue9 === "gram calorie")
      result9.value = Number(input9.value)* 860421;
    else if(InputTypeValue9 === "kilowatt hour" && ResultTypeValue9 === "kilowatt hour")
      result9.value = input9.value;
    else if(InputTypeValue9 === "kilowatt hour" && ResultTypeValue9 === "kilo calorie")
      result9.value = Number(input9.value)* 860.421;
    else if(InputTypeValue9 === "kilowatt hour" && ResultTypeValue9 === "watt hour")
      result9.value = Number(input9.value)* 1000;
    else if(InputTypeValue9 === "kilowatt hour" && ResultTypeValue9 === "joule")
      result9.value = Number(input9.value)*3.6e+6;
    else if(InputTypeValue9 === "kilowatt hour" && ResultTypeValue9 === "electronvolt")
      result9.value = Number(input9.value)* 2.247e+25;


    if(InputTypeValue9 === "kilo calorie" && ResultTypeValue9 === "kilojoule")
      result9.value = Number(input9.value)* 4.184;
    else if(InputTypeValue9 === "kilo calorie" && ResultTypeValue9 === "gram calorie")
      result9.value = Number(input9.value)* 1000;
    else if(InputTypeValue9 === "kilo calorie" && ResultTypeValue9 === "kilo calorie")
      result9.value = input9.value;
    else if(InputTypeValue9 === "kilo calorie" && ResultTypeValue9 === "joule")
      result9.value = Number(input9.value)* 4184;
    else if(InputTypeValue9 === "kilo calorie" && ResultTypeValue9 === "watt hour")
      result9.value = Number(input9.value)* 1.16222;
    else if(InputTypeValue9 === "kilo calorie" && ResultTypeValue9 === "kilowatt hour")
      result9.value = Number(input9.value)*0.00116222;
    else if(InputTypeValue9 === "kilo calorie" && ResultTypeValue9 === "electronvolt")
      result9.value = Number(input9.value)* 2.611e+22;


    if(InputTypeValue9 === "electronvolt" && ResultTypeValue9 === "kilojoule")
      result9.value = Number(input9.value)* 1.6022e-22;
    else if(InputTypeValue9 === "electronvolt" && ResultTypeValue9 === "gram calorie")
      result9.value = Number(input9.value)*3.8293e-20;
    else if(InputTypeValue9 === "electronvolt" && ResultTypeValue9 === "electronvolt")
      result9.value = input9.value;
    else if(InputTypeValue9 === "electronvolt" && ResultTypeValue9 === "kilo calorie")
      result9.value = Number(input9.value)* 3.8293e-23;
    else if(InputTypeValue9 === "electronvolt" && ResultTypeValue9 === "watt hour")
      result9.value = Number(input9.value)* 4.4505e-23;
    else if(InputTypeValue9 === "electronvolt" && ResultTypeValue9 === "kilowatt hour")
      result9.value = Number(input9.value)*4.4505e-26;
    else if(InputTypeValue9 === "electronvolt" && ResultTypeValue9 === "joule")
      result9.value = Number(input9.value)*1.6022e-19;


}





