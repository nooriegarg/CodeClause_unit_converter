var input = document.getElementById('input');
var result = document.getElementById('result');
var InputType = document.getElementById('InputType');
var ResultType = document.getElementById('ResultType');
var InputTypeValue, ResultTypeValue;

//add listener
input.addEventListener("keyup",myResult);
InputType.addEventListener("change",myResult);
ResultType.addEventListener("change",myResult);

//take initial values
InputTypeValue = InputType.value;
ResultTypeValue = ResultType.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue = InputType.value;
    ResultTypeValue = ResultType.value;

    //----------FOR LENGTH CONVERTER---------

    if(InputTypeValue === "meter" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 0.001;
    else if(InputTypeValue === "meter" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)* 100;
    else if(InputTypeValue === "meter" && ResultTypeValue === "meter")
      result.value = input.value;
    else if(InputTypeValue === "meter" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 1000;
    else if(InputTypeValue === "meter" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 1000000;
    else if(InputTypeValue === "meter" && ResultTypeValue === "nanometer")
      result.value = Number(input.value)*1000000000;
    else if(InputTypeValue === "meter" && ResultTypeValue === "mile")
      result.value = Number(input.value)* 0.000621371;
    else if(InputTypeValue === "meter" && ResultTypeValue === "yard")
      result.value = Number(input.value)*1.09361;
    else if(InputTypeValue === "meter" && ResultTypeValue === "foot")
      result.value = Number(input.value)* 3.28084;
    else if(InputTypeValue === "meter" && ResultTypeValue === "inch")
      result.value = Number(input.value)*39.3701;


      if(InputTypeValue === "kilometer" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 1000;
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)* 100000;
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "kilometer")
      result.value = input.value;
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 1000000; 
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 1000000000;
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "nanometer")
      result.value = Number(input.value)*1000000000000;
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "mile")
      result.value = Number(input.value)* 0.621371;
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "yard")
      result.value = Number(input.value)*1093.61;
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "foot")
      result.value = Number(input.value)* 3280.84;
    else if(InputTypeValue === "kilometer" && ResultTypeValue === "inch")
      result.value = Number(input.value)*39370.1;


    if(InputTypeValue === "centimeter" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 0.00001;
    else if(InputTypeValue === "centimeter" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 0.01;
    else if(InputTypeValue === "centimeter" && ResultTypeValue === "centimeter")
      result.value = input.value;
    else if(InputTypeValue === "centimeter" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 10;  
      else if(InputTypeValue === "centimeter" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 10000;
    else if(InputTypeValue === "centimeter" && ResultTypeValue === "nanometer")
      result.value =  Number(input.value)* 10000000;
    else if(InputTypeValue === "centimeter" && ResultTypeValue === "mile")
      result.value =Number(input.value)* 0.00000621371;
    else if(InputTypeValue === "centimeter" && ResultTypeValue === "yard")
      result.value = Number(input.value)*0.0109361;
    else if(InputTypeValue === "centimeter" && ResultTypeValue === "foot")
      result.value = Number(input.value)* 0.0328084;
    else if(InputTypeValue === "centimeter" && ResultTypeValue === "inch")
      result.value =  Number(input.value)* 0.393701;


    if(InputTypeValue === "millimeter" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 0.001;
    else if(InputTypeValue === "millimeter" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 0.000001;
    else if(InputTypeValue === "millimeter" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)*0.1;
    else if(InputTypeValue === "millimeter" && ResultTypeValue === "millimeter")
      result.value = input.value;
      else if(InputTypeValue === "millimeter" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 1000;
    else if(InputTypeValue === "millimeter" && ResultTypeValue === "nanometer")
      result.value = Number(input.value)*1000000;
    else if(InputTypeValue === "millimeter" && ResultTypeValue === "mile")
      result.value = Number(input.value)* 0.000000621371;
    else if(InputTypeValue === "millimeter" && ResultTypeValue === "yard")
      result.value = Number(input.value)*0.00109361;
    else if(InputTypeValue === "millimeter" && ResultTypeValue === "foot")
      result.value = Number(input.value)*0.00328084;
    else if(InputTypeValue === "millimeter" && ResultTypeValue === "inch")
      result.value = Number(input.value)*0.0393701;



    if(InputTypeValue === "micrometer" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 0.000001;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 0.000000001;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)* 0.0001;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 0.001;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "micrometer")
      result.value = input.value;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "nanometer")
      result.value = Number(input.value)* 1000;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "mile")
      result.value = Number(input.value)* 0.000000000621371;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "yard")
      result.value = Number(input.value)* 0.00000109361;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "foot")
      result.value = Number(input.value)* 0.00000328084;
    else if(InputTypeValue === "micrometer" && ResultTypeValue === "inch")
      result.value = Number(input.value)* 0.0000393701;


    if(InputTypeValue === "nanometer" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 0.000000000001;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 0.000000001;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "nanometer")
      result.value = input.value;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 0.000001;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 0.001;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)* 0.0000001;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "mile")
      result.value = Number(input.value)* 0.000000000000621371;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "yard")
      result.value = Number(input.value)* 0.00000000109361;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "foot")
      result.value = Number(input.value)* 0.00000000328084;
    else if(InputTypeValue === "nanometer" && ResultTypeValue === "inch")
      result.value = Number(input.value)* 0.0000000393701;


    if(InputTypeValue === "mile" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 1.60934;
    else if(InputTypeValue === "mile" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 1609.34;
    else if(InputTypeValue === "mile" && ResultTypeValue === "mile")
      result.value = input.value;
    else if(InputTypeValue === "mile" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 160934000000;
    else if(InputTypeValue === "mile" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 160934000000000;
    else if(InputTypeValue === "mile" && ResultTypeValue === "nanometer")
      result.value = Number(input.value)* 160934000000000000;
    else if(InputTypeValue === "mile" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)* 160934;
    else if(InputTypeValue === "mile" && ResultTypeValue === "yard")
      result.value = Number(input.value)* 1760;
    else if(InputTypeValue === "mile" && ResultTypeValue === "foot")
      result.value = Number(input.value)* 5280;
    else if(InputTypeValue === "mile" && ResultTypeValue === "inch")
      result.value = Number(input.value)* 63360;



    if(InputTypeValue === "yard" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 0.0009144;
    else if(InputTypeValue === "yard" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 0.9144;
    else if(InputTypeValue === "yard" && ResultTypeValue === "yard")
      result.value = input.value;
    else if(InputTypeValue === "yard" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 914.4;
    else if(InputTypeValue === "yard" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 914400;
    else if(InputTypeValue === "yard" && ResultTypeValue === "nanometer")
      result.value = Number(input.value)* 914400000000;
    else if(InputTypeValue === "yard" && ResultTypeValue === "mile")
      result.value = Number(input.value)* 0.000000000621371;
    else if(InputTypeValue === "yard" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)* 91.44;
    else if(InputTypeValue === "yard" && ResultTypeValue === "foot")
      result.value = Number(input.value)* 3;
    else if(InputTypeValue === "yard" && ResultTypeValue === "inch")
      result.value = Number(input.value)* 36;


    if(InputTypeValue === "foot" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 0.0003048;
    else if(InputTypeValue === "foot" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 0.3048;
    else if(InputTypeValue === "foot" && ResultTypeValue === "foot")
      result.value = input.value;
    else if(InputTypeValue === "foot" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 304.8;
    else if(InputTypeValue === "foot" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 304800;
    else if(InputTypeValue === "foot" && ResultTypeValue === "nanometer")
      result.value = Number(input.value)* 304800000000;
    else if(InputTypeValue === "foot" && ResultTypeValue === "mile")
      result.value = Number(input.value)* 0.000189394;
    else if(InputTypeValue === "foot" && ResultTypeValue === "yard")
      result.value = Number(input.value)* 0.333333;
    else if(InputTypeValue === "foot" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)* 30.48;
    else if(InputTypeValue === "foot" && ResultTypeValue === "inch")
      result.value = Number(input.value)* 12;


    if(InputTypeValue === "inch" && ResultTypeValue === "kilometer")
      result.value = Number(input.value)* 0.0000254;
    else if(InputTypeValue === "inch" && ResultTypeValue === "meter")
      result.value = Number(input.value)* 0.0254;
    else if(InputTypeValue === "inch" && ResultTypeValue === "inch")
      result.value = input.value;
    else if(InputTypeValue === "inch" && ResultTypeValue === "millimeter")
      result.value = Number(input.value)* 25.4;
    else if(InputTypeValue === "inch" && ResultTypeValue === "micrometer")
      result.value = Number(input.value)* 25400;
    else if(InputTypeValue === "inch" && ResultTypeValue === "nanometer")
      result.value = Number(input.value)* 2540000000;
    else if(InputTypeValue === "inch" && ResultTypeValue === "mile")
      result.value = Number(input.value)* 0.000015783;
    else if(InputTypeValue === "inch" && ResultTypeValue === "yard")
      result.value = Number(input.value)* 0.0277778;
    else if(InputTypeValue === "inch" && ResultTypeValue === "foot")
      result.value = Number(input.value)* 0.0833333;
    else if(InputTypeValue === "inch" && ResultTypeValue === "centimeter")
      result.value = Number(input.value)* 2.54;

    //------------FOR AREA CONVERTER------------


    //   if(InputTypeValue === "square kilometer" && ResultTypeValue === "square meter")
    //   result.value = Number(input.value)* 1000000;
    // else if(InputTypeValue === "square kilometer" && ResultTypeValue === "square mile")
    //   result.value = Number(input.value)* 0.386102;
    // else if(InputTypeValue === "square kilometer" && ResultTypeValue === "square kilometer")
    //   result.value = input.value;
    //   else if(InputTypeValue === "square kilometer" && ResultTypeValue === "square yard")
    //   result.value = Number(input.value)* 1196000;
    // else if(InputTypeValue === "square kilometer" && ResultTypeValue === "square foot")
    //   result.value = Number(input.value)* 10760000;
    // else if(InputTypeValue === "square kilometer" && ResultTypeValue === "square inch")
    //   result.value = Number(input.value)* 1550000000;
    //   else if(InputTypeValue === "square kilometer" && ResultTypeValue === "hectare")
    //   result.value = Number(input.value)* 100;
    // else if(InputTypeValue === "square kilometer" && ResultTypeValue === "acre")
    //   result.value = Number(input.value)* 247.105;


    //   if(InputTypeValue === "square meter" && ResultTypeValue === "square kilometer")
    //   result.value = Number(input.value)* 0.000001;
    // else if(InputTypeValue === "square meter" && ResultTypeValue === "square mile")
    //   result.value = Number(input.value)* 0.0000003861;
    // else if(InputTypeValue === "square meter" && ResultTypeValue === "square meter")
    //   result.value = input.value;
    //   else if(InputTypeValue === "square meter" && ResultTypeValue === "square yard")
    //   result.value = Number(input.value)* 1.19599;
    // else if(InputTypeValue === "square meter" && ResultTypeValue === "square foot")
    //   result.value = Number(input.value)* 10.7639;
    // else if(InputTypeValue === "square meter" && ResultTypeValue === "square inch")
    //   result.value = Number(input.value)* 1550;
    //   else if(InputTypeValue === "square meter" && ResultTypeValue === "hectare")
    //   result.value = Number(input.value)* 0.0001;
    // else if(InputTypeValue === "square meter" && ResultTypeValue === "acre")
    //   result.value = Number(input.value)*0.000247105;
    

    //   if(InputTypeValue === "square mile" && ResultTypeValue === "square kilometer")
    //   result.value = Number(input.value)* 2.58999;
    // else if(InputTypeValue === "square mile" && ResultTypeValue === "square meter")
    //   result.value = Number(input.value)* 2590000;
    // else if(InputTypeValue === "square mile" && ResultTypeValue === "square mile")
    //   result.value = input.value;
    //   else if(InputTypeValue === "square mile" && ResultTypeValue === "square yard")
    //   result.value = Number(input.value)* 3098000;
    // else if(InputTypeValue === "square mile" && ResultTypeValue === "square foot")
    //   result.value = Number(input.value)* 27880000;
    // else if(InputTypeValue === "square mile" && ResultTypeValue === "square inch")
    //   result.value = Number(input.value)* 4014000000;
    //   else if(InputTypeValue === "square mile" && ResultTypeValue === "hectare")
    //   result.value = Number(input.value)* 258.999;
    // else if(InputTypeValue === "square mile" && ResultTypeValue === "acre")
    //   result.value = Number(input.value)* 640;
   

    //   if(InputTypeValue === "square yard" && ResultTypeValue === "square kilometer")
    //   result.value = Number(input.value)* 0.00000083613;
    // else if(InputTypeValue === "square yard" && ResultTypeValue === "square meter")
    //   result.value = Number(input.value)* 0.836127;
    // else if(InputTypeValue === "square yard" && ResultTypeValue === "square yard")
    //   result.value = input.value;
    //   else if(InputTypeValue === "square yard" && ResultTypeValue === "square mile")
    //   result.value = Number(input.value)* 0.00000032283;
    // else if(InputTypeValue === "square yard" && ResultTypeValue === "square foot")
    //   result.value = Number(input.value)* 9;
    // else if(InputTypeValue === "square yard" && ResultTypeValue === "square inch")
    //   result.value = Number(input.value)* 1296;
    //   else if(InputTypeValue === "square yard" && ResultTypeValue === "hectare")
    //   result.value = Number(input.value)* 0.000083613;
    // else if(InputTypeValue === "square yard" && ResultTypeValue === "acre")
    //   result.value = Number(input.value)* 0.000206612;
    
    //   if(InputTypeValue === "square foot" && ResultTypeValue === "square kilometer")
    //   result.value = Number(input.value)* 0.000000092903;
    // else if(InputTypeValue === "square foot" && ResultTypeValue === "squaremeter")
    //   result.value = Number(input.value)* 0.092903;
    // else if(InputTypeValue === "square foot" && ResultTypeValue === "square foot")
    //   result.value = input.value;
    //   else if(InputTypeValue === "square foot" && ResultTypeValue === "square mile")
    //   result.value = Number(input.value)* 0.00000003587
    // else if(InputTypeValue === "square foot" && ResultTypeValue === "square yard")
    //   result.value = Number(input.value)* 0.111111;
    // else if(InputTypeValue === "square foot" && ResultTypeValue === "square inch")
    //   result.value = Number(input.value)* 144;
    //   else if(InputTypeValue === "square foot" && ResultTypeValue === "hectare")
    //   result.value = Number(input.value)* 0.0000092903;
    // else if(InputTypeValue === "square foot" && ResultTypeValue === "acre")
    //   result.value = Number(input.value)* 0.000022957;
    

    //   if(InputTypeValue === "square inch" && ResultTypeValue === "square kilometer")
    //   result.value = Number(input.value)* 0.00000000064516;
    // else if(InputTypeValue === "square inch" && ResultTypeValue === "square meter")
    //   result.value = Number(input.value)* 0.00064516;
    // else if(InputTypeValue === "square inch" && ResultTypeValue === "square inch")
    //   result.value = input.value;
    //   else if(InputTypeValue === "square inch" && ResultTypeValue === "square mile")
    //   result.value = Number(input.value)* 0.0000000002491;
    // else if(InputTypeValue === "square inch" && ResultTypeValue === "square yard")
    //   result.value = Number(input.value)* 0.000771605;
    // else if(InputTypeValue === "square inch" && ResultTypeValue === "square foot")
    //   result.value = Number(input.value)* 0.00694444;
    //   else if(InputTypeValue === "square inch" && ResultTypeValue === "hectare")
    //   result.value = Number(input.value)* 0.000000064516;
    // else if(InputTypeValue === "square inch" && ResultTypeValue === "acre")
    //   result.value = Number(input.value)* 0.00000015942;
    
    //   if(InputTypeValue === "hectare" && ResultTypeValue === "square kilometer")
    //   result.value = Number(input.value)* 0.01;
    // else if(InputTypeValue === "hectare" && ResultTypeValue === "square meter")
    //   result.value = Number(input.value)* 10000;
    // else if(InputTypeValue === "hectare" && ResultTypeValue === "hectare")
    //   result.value = input.value;
    //   else if(InputTypeValue === "hectare" && ResultTypeValue === "square mile")
    //   result.value = Number(input.value)* 0.00386102;
    // else if(InputTypeValue === "hectare" && ResultTypeValue === "square yard")
    //   result.value = Number(input.value)* 11959.9;
    // else if(InputTypeValue === "hectare" && ResultTypeValue === "square foot")
    //   result.value = Number(input.value)* 107639;
    //   else if(InputTypeValue === "hectare" && ResultTypeValue === "square inch")
    //   result.value = Number(input.value)* 0.000000155;
    // else if(InputTypeValue === "hectare" && ResultTypeValue === "acre")
    //   result.value = Number(input.value)* 2.47105;
    
    //   if(InputTypeValue === "acre" && ResultTypeValue === "square kilometer")
    //   result.value = Number(input.value)* 0.00404686;
    // else if(InputTypeValue === "acre" && ResultTypeValue === "square meter")
    //   result.value = Number(input.value)* 4046.86;
    // else if(InputTypeValue === "acre" && ResultTypeValue === "acre")
    //   result.value = input.value;
    //   else if(InputTypeValue === "acre" && ResultTypeValue === "square mile")
    //   result.value = Number(input.value)* 0.0015625;
    // else if(InputTypeValue === "acre" && ResultTypeValue === "square yard")
    //   result.value = Number(input.value)*4840;
    // else if(InputTypeValue === "acre" && ResultTypeValue === "square foot")
    //   result.value = Number(input.value)* 43560;
    //   else if(InputTypeValue === "acre" && ResultTypeValue === "square inch")
    //   result.value = Number(input.value)* 6273000;
    // else if(InputTypeValue === "acre" && ResultTypeValue === "hectare")
    //   result.value = Number(input.value)* 0.404686;
    

    //----------------FOR MASS CONVERTER------------------

    // if(InputTypeValue === "kilogram" && ResultTypeValue === "gram")
    //   result.value = Number(input.value)* 1000;
    // else if(InputTypeValue === "kilogram" && ResultTypeValue === "milligram")
    //   result.value = Number(input.value)* 1000000;
    // else if(InputTypeValue === "kilogram" && ResultTypeValue === "kilogram")
    //   result.value = input.value;
    //   else if(InputTypeValue === "kilogram" && ResultTypeValue === "microgram")
    //   result.value = Number(input.value)* 1000000000;
    // else if(InputTypeValue === "kilogram" && ResultTypeValue === "imperial ton")
    //   result.value = Number(input.value)* 0.000984207;
    // else if(InputTypeValue === "kilogram" && ResultTypeValue === "stone")
    //   result.value = Number(input.value)* 0.157473;
    //   else if(InputTypeValue === "kilogram" && ResultTypeValue === "pound")
    //   result.value = Number(input.value)* 2.20462;
    // else if(InputTypeValue === "kilogram" && ResultTypeValue === "ounce")
    //   result.value = Number(input.value)* 35.274;


    //   if(InputTypeValue === "gram" && ResultTypeValue === "kilogram")
    //   result.value = Number(input.value)* 0.001;
    // else if(InputTypeValue === "gram" && ResultTypeValue === "milligram")
    //   result.value = Number(input.value)* 1000;
    // else if(InputTypeValue === "gram" && ResultTypeValue === "gram")
    //   result.value = input.value;
    //   else if(InputTypeValue === "gram" && ResultTypeValue === "microgram")
    //   result.value = Number(input.value)* 1000000;
    // else if(InputTypeValue === "gram" && ResultTypeValue === "imperial ton")
    //   result.value = Number(input.value)* 0.00000098421;
    // else if(InputTypeValue === "gram" && ResultTypeValue === "stone")
    //   result.value = Number(input.value)* 0.000157473;
    //   else if(InputTypeValue === "gram" && ResultTypeValue === "pound")
    //   result.value = Number(input.value)* 0.00220462;
    // else if(InputTypeValue === "gram" && ResultTypeValue === "ounce")
    //   result.value = Number(input.value)*0.035274;


    //   if(InputTypeValue === "milligram" && ResultTypeValue === "kilogram")
    //   result.value = Number(input.value)* 0.000001;
    // else if(InputTypeValue === "milligram" && ResultTypeValue === "gram")
    //   result.value = Number(input.value)* 0.001;
    // else if(InputTypeValue === "milligram" && ResultTypeValue === "milligram")
    //   result.value = input.value;
    //   else if(InputTypeValue === "milligram" && ResultTypeValue === "microgram")
    //   result.value = Number(input.value)* 1000;
    // else if(InputTypeValue === "milligram" && ResultTypeValue === "imperial ton")
    //   result.value = Number(input.value)* 0.0000000009842;
    // else if(InputTypeValue === "milligram" && ResultTypeValue === "stone")
    //   result.value = Number(input.value)* 0.00000015747;
    //   else if(InputTypeValue === "milligram" && ResultTypeValue === "pound")
    //   result.value = Number(input.value)* 0.0000022046;
    // else if(InputTypeValue === "milligram" && ResultTypeValue === "ounce")
    //   result.value = Number(input.value)* 0.000035274;


    //   if(InputTypeValue === "microgram" && ResultTypeValue === "gram")
    //   result.value = Number(input.value)* 0.000001;
    // else if(InputTypeValue === "microgram" && ResultTypeValue === "milligram")
    //   result.value = Number(input.value)* 0.001;
    // else if(InputTypeValue === "microgram" && ResultTypeValue === "microgram")
    //   result.value = input.value;
    //   else if(InputTypeValue === "microgram" && ResultTypeValue === "kilogram")
    //   result.value = Number(input.value)* 0.000000001;
    // else if(InputTypeValue === "microgram" && ResultTypeValue === "imperial ton")
    //   result.value = Number(input.value)* 0.00000000000098421;
    // else if(InputTypeValue === "microgram" && ResultTypeValue === "stone")
    //   result.value = Number(input.value)* 0.00000000015747;
    //   else if(InputTypeValue === "microgram" && ResultTypeValue === "pound")
    //   result.value = Number(input.value)* 0.0000000022046;
    // else if(InputTypeValue === "microgram" && ResultTypeValue === "ounce")
    //   result.value = Number(input.value)* 0.000000035274;

    //   if(InputTypeValue === "imperial ton" && ResultTypeValue === "gram")
    //   result.value = Number(input.value)* 1016000;
    // else if(InputTypeValue === "imperial ton" && ResultTypeValue === "milligram")
    //   result.value = Number(input.value)* 1016000000;
    // else if(InputTypeValue === "imperial ton" && ResultTypeValue === "imperial ton")
    //   result.value = input.value;
    //   else if(InputTypeValue === "imperial ton" && ResultTypeValue === "microgram")
    //   result.value = Number(input.value)* 101600000000;
    // else if(InputTypeValue === "imperial ton" && ResultTypeValue === "kilogram")
    //   result.value = Number(input.value)* 1016.05;
    // else if(InputTypeValue === "imperial ton" && ResultTypeValue === "stone")
    //   result.value = Number(input.value)* 160;
    //   else if(InputTypeValue === "imperial ton" && ResultTypeValue === "pound")
    //   result.value = Number(input.value)* 2240;
    // else if(InputTypeValue === "imperial ton" && ResultTypeValue === "ounce")
    //   result.value = Number(input.value)* 35840;
    

    //   if(InputTypeValue === "stone" && ResultTypeValue === "gram")
    //   result.value = Number(input.value)* 6350.29;
    // else if(InputTypeValue === "stone" && ResultTypeValue === "milligram")
    //   result.value = Number(input.value)* 6350000;
    // else if(InputTypeValue === "stone" && ResultTypeValue === "stone")
    //   result.value = input.value;
    //   else if(InputTypeValue === "stone" && ResultTypeValue === "microgram")
    //   result.value = Number(input.value)* 6350000000;
    // else if(InputTypeValue === "stone" && ResultTypeValue === "imperial ton")
    //   result.value = Number(input.value)* 0.00625;
    // else if(InputTypeValue === "stone" && ResultTypeValue === "kilogram")
    //   result.value = Number(input.value)* 6.35029;
    //   else if(InputTypeValue === "stone" && ResultTypeValue === "pound")
    //   result.value = Number(input.value)* 14;
    // else if(InputTypeValue === "stone" && ResultTypeValue === "ounce")
    //   result.value = Number(input.value)* 224;

    
    //   if(InputTypeValue === "pound" && ResultTypeValue === "gram")
    //   result.value = Number(input.value)* 453.592;
    // else if(InputTypeValue === "pound" && ResultTypeValue === "milligram")
    //   result.value = Number(input.value)* 453592;
    // else if(InputTypeValue === "pound" && ResultTypeValue === "pound")
    //   result.value = input.value;
    //   else if(InputTypeValue === "pound" && ResultTypeValue === "microgram")
    //   result.value = Number(input.value)* 453600000;
    // else if(InputTypeValue === "pound" && ResultTypeValue === "imperial ton")
    //   result.value = Number(input.value)* 0.000446429;
    // else if(InputTypeValue === "pound" && ResultTypeValue === "stone")
    //   result.value = Number(input.value)* 0.0714286;
    //   else if(InputTypeValue === "pound" && ResultTypeValue === "kilogram")
    //   result.value = Number(input.value)*0.453592;
    // else if(InputTypeValue === "pound" && ResultTypeValue === "ounce")
    //   result.value = Number(input.value)* 16;

    
    //  if(InputTypeValue === "ounce" && ResultTypeValue === "gram")
    //   result.value = Number(input.value)* 28.3495;
    // else if(InputTypeValue === "ounce" && ResultTypeValue === "milligram")
    //   result.value = Number(input.value)* 28349.5;
    // else if(InputTypeValue === "ounce" && ResultTypeValue === "ounce")
    //   result.value = input.value;
    //   else if(InputTypeValue === "ounce" && ResultTypeValue === "microgram")
    //   result.value = Number(input.value)* 28350000;
    // else if(InputTypeValue === "ounce" && ResultTypeValue === "imperial ton")
    //   result.value = Number(input.value)*0.000027902;
    // else if(InputTypeValue === "ounce" && ResultTypeValue === "stone")
    //   result.value = Number(input.value)* 0.00446429;
    //   else if(InputTypeValue === "ounce" && ResultTypeValue === "pound")
    //   result.value = Number(input.value)* 0.0625;
    // else if(InputTypeValue === "ounce" && ResultTypeValue === "kilogram")
    //   result.value = Number(input.value)* 0.0283495;










      
      

}