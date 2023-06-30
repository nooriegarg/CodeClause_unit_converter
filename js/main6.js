var input5 = document.getElementById('input5');
var result5 = document.getElementById('result5');
var InputType5 = document.getElementById('InputType5');
var ResultType5 = document.getElementById('ResultType5');
var InputTypeValue5, ResultTypeValue5;

//add listener
input5.addEventListener("keyup",myResult);
InputType5.addEventListener("change",myResult);
ResultType5.addEventListener("change",myResult);

//take initial values
InputTypeValue5 = InputType5.value;
ResultTypeValue5 = ResultType5.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue5 = InputType5.value;
    ResultTypeValue5 = ResultType5.value;

    //------------FOR VOLUME CONVERTER-----------------------


    if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)* 1.e-9;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 1000;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === " cubic meter")
      result5.value = input5.value;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 1000000;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 264.17217686;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 219.9692483;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 2.39912836e-10;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 1.30795062;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 35.31467;
    else if(InputTypeValue5 === "cubic meter" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 61023.744095;

    
      if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 1000000000;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 1000000000000;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === " cubic kilometer")
      result5.value = input5.value;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 1000000000000000;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 264172176858;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 219969248299;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 0.23991264;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 1307950619.3;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 35314666721;
    else if(InputTypeValue5 === "cubic kilometer" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 61023744095;
    
    
      if(InputTypeValue5 === "liter" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)* 1.e-12;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 0.001;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "liter")
      result5.value = input5.value;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 1000;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 0.2641722;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 0.2199692483;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 2.39913e-13;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 0.001307951;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 0.035314667;
    else if(InputTypeValue5 === "liter" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 61.0237441;
    
    
      if(InputTypeValue5 === "millileter" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)* 9.999999e-16;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 0.001;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "milliliter")
      result5.value = input5.value;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 0.000001;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 0.0002641722;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 0.00021996;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 2.399128e-16;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 0.000001308;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 0.0000353147;
    else if(InputTypeValue5 === "milliliter" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 0.0610237441;

    
      if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)* 3.785e-12;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 3.78541;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "us gallon")
      result5.value = input5.value;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 3785.41;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 0.00378541;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 0.832674;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 9.0816856e-13;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 0.00495113;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 0.133680493;
    else if(InputTypeValue5 === "us gallon" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 230.99989113;


      if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)* 4.546e-12;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 4.54609;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "imperial gallon")
      result5.value = input5.value;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 4546.09;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 1.2009504;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 0.00454609;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 1.09066e-12;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 0.0059460612;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 0.160543653;
    else if(InputTypeValue5 === "imperial gallon" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 277.419433;


      if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)* 4.16818;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 4168180000000;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === " cubic mile")
      result5.value = input5.value;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 4168180000000000;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 11011171842;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 9168714213;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 4168180000;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 5451773612.4;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 1471978875;
    else if(InputTypeValue5 === "cubic mile" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 2543579496;


      if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)*7.645548579e-10;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 764.5548579;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === " cubic yard")
      result5.value = input5.value;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 764554.8579;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 201.97412116;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 168.17855739;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 1.834265e-10;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 0.7645548579;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 27;
    else if(InputTypeValue5 === "cubic yard" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 46656;


      if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)* 2.8316846e-11;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 28.316846;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === " cubic foot")
      result5.value = input5.value;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 28316.846;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 7.480523006;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 6.2288356;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 6.7935757e-12;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 0.037037037;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 0.028316846;
    else if(InputTypeValue5 === "cubic foot" && ResultTypeValue5 === "cubic inch")
      result5.value = Number(input5.value)* 1728;


      if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "cubic kilometer")
      result5.value = Number(input5.value)* 1.63871e-14;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "liter")
      result5.value = Number(input5.value)* 0.0163871;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === " cubic inch")
      result5.value = input5.value;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "milliliter")
      result5.value = Number(input5.value)* 16.3871;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "us gallon")
      result5.value = Number(input5.value)* 0.0043290064;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "imperial gallon")
      result5.value = Number(input5.value)* 0.0036046501;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "cubic mile")
      result5.value = Number(input5.value)* 3.931467e-15;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "cubic yard")
      result5.value = Number(input5.value)* 0.0000214335;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "cubic foot")
      result5.value = Number(input5.value)* 0.0005787037;
    else if(InputTypeValue5 === "cubic inch" && ResultTypeValue5 === "cubic meter")
      result5.value = Number(input5.value)* 0.0000163871;


}