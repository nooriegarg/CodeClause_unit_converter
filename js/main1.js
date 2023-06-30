var input1 = document.getElementById('input1');
var result1 = document.getElementById('result1');
var InputType1= document.getElementById('InputType1');
var ResultType1 = document.getElementById('ResultType1');
var InputTypeValue1, ResultTypeValue1;

//add listener
input1.addEventListener("keyup",myResult);
InputType1.addEventListener("change",myResult);
ResultType1.addEventListener("change",myResult);

//take initial values
InputTypeValue1 = InputType1.value;
ResultTypeValue1 = ResultType1.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue1 = InputType1.value;
    ResultTypeValue1 = ResultType1.value;

    //--------------FOR AREA CONVERTER--------------------

    if(InputTypeValue1 === "square kilometer" && ResultTypeValue1 === "square meter")
      result1.value = Number(input1.value)* 1000000;
    else if(InputTypeValue1 === "square kilometer" && ResultTypeValue1 === "square mile")
      result1.value = Number(input1.value)* 0.386102;
    else if(InputTypeValue1 === "square kilometer" && ResultTypeValue1 === "square kilometer")
      result1.value = input1.value;
      else if(InputTypeValue1 === "square kilometer" && ResultTypeValue1 === "square yard")
      result1.value = Number(input1.value)* 1196000;
    else if(InputTypeValue1 === "square kilometer" && ResultTypeValue1 === "square foot")
      result1.value = Number(input1.value)* 10760000;
    else if(InputTypeValue1 === "square kilometer" && ResultTypeValue1 === "square inch")
      result1.value = Number(input1.value)* 1550000000;
      else if(InputTypeValue1 === "square kilometer" && ResultTypeValue1 === "hectare")
      result1.value = Number(input1.value)* 100;
    else if(InputTypeValue1 === "square kilometer" && ResultTypeValue1 === "acre")
      result1.value = Number(input1.value)* 247.105;


      if(InputTypeValue1 === "square meter" && ResultTypeValue1 === "square kilometer")
      result1.value = Number(input1.value)* 0.000001;
    else if(InputTypeValue1 === "square meter" && ResultTypeValue1 === "square mile")
      result1.value = Number(input1.value)* 0.0000003861;
    else if(InputTypeValue1 === "square meter" && ResultTypeValue1 === "square meter")
      result.value = input.value;
      else if(InputTypeValue1 === "square meter" && ResultTypeValue1 === "square yard")
      result1.value = Number(input1.value)* 1.19599;
    else if(InputTypeValue1 === "square meter" && ResultTypeValue1 === "square foot")
      result1.value = Number(input1.value)* 10.7639;
    else if(InputTypeValue1 === "square meter" && ResultTypeValue1 === "square inch")
      result1.value = Number(input1.value)* 1550;
      else if(InputTypeValue1 === "square meter" && ResultTypeValue1 === "hectare")
      result1.value = Number(input1.value)* 0.0001;
    else if(InputTypeValue1 === "square meter" && ResultTypeValue1 === "acre")
      result1.value = Number(input1.value)*0.000247105;
    

      if(InputTypeValue1 === "square mile" && ResultTypeValue1 === "square kilometer")
      result1.value = Number(input1.value)* 2.58999;
    else if(InputTypeValue1 === "square mile" && ResultTypeValue1 === "square meter")
      result.value = Number(input.value)* 2590000;
    else if(InputTypeValue1 === "square mile" && ResultTypeValue1 === "square mile")
      result1.value = input1.value;
      else if(InputTypeValue1 === "square mile" && ResultTypeValue1 === "square yard")
      result1.value = Number(input1.value)* 3098000;
    else if(InputTypeValue1 === "square mile" && ResultTypeValue1 === "square foot")
      result1.value = Number(input1.value)* 27880000;
    else if(InputTypeValue1 === "square mile" && ResultTypeValue1 === "square inch")
      result1.value = Number(input1.value)* 4014000000;
      else if(InputTypeValue1 === "square mile" && ResultTypeValue1 === "hectare")
      result1.value = Number(input1.value)* 258.999;
    else if(InputTypeValue1 === "square mile" && ResultTypeValue1 === "acre")
      result1.value = Number(input1.value)* 640;
   

      if(InputTypeValue1 === "square yard" && ResultTypeValue1 === "square kilometer")
      result1.value = Number(input1.value)* 0.00000083613;
    else if(InputTypeValue1 === "square yard" && ResultTypeValue1 === "square meter")
      result1.value = Number(input1.value)* 0.836127;
    else if(InputTypeValue === "square yard" && ResultTypeValue1 === "square yard")
      result1.value = input1.value;
      else if(InputTypeValue1 === "square yard" && ResultTypeValue1 === "square mile")
      result1.value = Number(input1.value)* 0.00000032283;
    else if(InputTypeValue1 === "square yard" && ResultTypeValue1 === "square foot")
      result1.value = Number(input1.value)* 9;
    else if(InputTypeValue1 === "square yard" && ResultTypeValue1 === "square inch")
      result1.value = Number(input1.value)* 1296;
      else if(InputTypeValue1 === "square yard" && ResultTypeValue1 === "hectare")
      result1.value = Number(input1.value)* 0.000083613;
    else if(InputTypeValue1 === "square yard" && ResultTypeValue1 === "acre")
      result1.value = Number(input1.value)* 0.000206612;
    
      if(InputTypeValue1 === "square foot" && ResultTypeValue1 === "square kilometer")
      result1.value = Number(input1.value)* 0.000000092903;
    else if(InputTypeValue1 === "square foot" && ResultTypeValue1 === "squaremeter")
      result1.value = Number(input1.value)* 0.092903;
    else if(InputTypeValue1 === "square foot" && ResultTypeValue1 === "square foot")
      result1.value = input1.value;
      else if(InputTypeValue1 === "square foot" && ResultTypeValue1 === "square mile")
      result1.value = Number(input.value)* 0.00000003587
    else if(InputTypeValue1 === "square foot" && ResultTypeValue1 === "square yard")
      result1.value = Number(input1.value)* 0.111111;
    else if(InputTypeValue1 === "square foot" && ResultTypeValue1 === "square inch")
      result1.value = Number(input1.value)* 144;
      else if(InputTypeValue1 === "square foot" && ResultTypeValue1 === "hectare")
      result1.value = Number(input1.value)* 0.0000092903;
    else if(InputTypeValue1 === "square foot" && ResultTypeValue1 === "acre")
      result1.value = Number(input1.value)* 0.000022957;
    

      if(InputTypeValue === "square inch" && ResultTypeValue === "square kilometer")
      result.value = Number(input.value)* 0.00000000064516;
    else if(InputTypeValue === "square inch" && ResultTypeValue === "square meter")
      result.value = Number(input.value)* 0.00064516;
    else if(InputTypeValue === "square inch" && ResultTypeValue === "square inch")
      result.value = input.value;
      else if(InputTypeValue === "square inch" && ResultTypeValue === "square mile")
      result.value = Number(input.value)* 0.0000000002491;
    else if(InputTypeValue === "square inch" && ResultTypeValue === "square yard")
      result.value = Number(input.value)* 0.000771605;
    else if(InputTypeValue === "square inch" && ResultTypeValue === "square foot")
      result.value = Number(input.value)* 0.00694444;
      else if(InputTypeValue === "square inch" && ResultTypeValue === "hectare")
      result.value = Number(input.value)* 0.000000064516;
    else if(InputTypeValue === "square inch" && ResultTypeValue === "acre")
      result.value = Number(input.value)* 0.00000015942;
    
      if(InputTypeValue === "hectare" && ResultTypeValue === "square kilometer")
      result.value = Number(input.value)* 0.01;
    else if(InputTypeValue === "hectare" && ResultTypeValue === "square meter")
      result.value = Number(input.value)* 10000;
    else if(InputTypeValue === "hectare" && ResultTypeValue === "hectare")
      result.value = input.value;
      else if(InputTypeValue === "hectare" && ResultTypeValue === "square mile")
      result.value = Number(input.value)* 0.00386102;
    else if(InputTypeValue === "hectare" && ResultTypeValue === "square yard")
      result.value = Number(input.value)* 11959.9;
    else if(InputTypeValue === "hectare" && ResultTypeValue === "square foot")
      result.value = Number(input.value)* 107639;
      else if(InputTypeValue === "hectare" && ResultTypeValue === "square inch")
      result.value = Number(input.value)* 0.000000155;
    else if(InputTypeValue === "hectare" && ResultTypeValue === "acre")
      result.value = Number(input.value)* 2.47105;
    
      if(InputTypeValue === "acre" && ResultTypeValue === "square kilometer")
      result.value = Number(input.value)* 0.00404686;
    else if(InputTypeValue === "acre" && ResultTypeValue === "square meter")
      result.value = Number(input.value)* 4046.86;
    else if(InputTypeValue === "acre" && ResultTypeValue === "acre")
      result.value = input.value;
      else if(InputTypeValue === "acre" && ResultTypeValue === "square mile")
      result.value = Number(input.value)* 0.0015625;
    else if(InputTypeValue === "acre" && ResultTypeValue === "square yard")
      result.value = Number(input.value)*4840;
    else if(InputTypeValue === "acre" && ResultTypeValue === "square foot")
      result.value = Number(input.value)* 43560;
      else if(InputTypeValue === "acre" && ResultTypeValue === "square inch")
      result.value = Number(input.value)* 6273000;
    else if(InputTypeValue === "acre" && ResultTypeValue === "hectare")
      result.value = Number(input.value)* 0.404686;


}
