var input6 = document.getElementById('input6');
var result6 = document.getElementById('result6');
var InputType6 = document.getElementById('InputType6');
var ResultType6 = document.getElementById('ResultType6');
var InputTypeValue6, ResultTypeValue6;

//add listener
input6.addEventListener("keyup",myResult);
InputType6.addEventListener("change",myResult);
ResultType6.addEventListener("change",myResult);

//take initial values
InputTypeValue6 = InputType6.value;
ResultTypeValue6 = ResultType6.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue6 = InputType6.value;
    ResultTypeValue6 = ResultType6.value;

    //----------------FOR SPEED CONVERTER--------------------------


    if(InputTypeValue6 === "mile per hour" && ResultTypeValue6 === "foot per second")
      result6.value = Number(input6.value)* 1.46667;
    else if(InputTypeValue6 === "mile per hour" && ResultTypeValue6 === "meter per second")
      result6.value = Number(input6.value)* 0.44704101612192;
    else if(InputTypeValue6 === "mile per hour" && ResultTypeValue6 === "mile per hour")
      result6.value = input6.value;
    else if(InputTypeValue6 === "mile per hour" && ResultTypeValue6 === "kilometer per hour")
      result6.value = Number(input6.value)* 1.60934;
      else if(InputTypeValue6 === "mile per hour" && ResultTypeValue6 === "knot")
      result6.value = Number(input6.value)* 0.868974082810932;


      if(InputTypeValue6 === "foot per second" && ResultTypeValue6 === "mile per hour")
      result6.value = Number(input6.value)* 0.6818164871590908227;
    else if(InputTypeValue6 === "foot per second" && ResultTypeValue6 === "meter per second")
      result6.value = Number(input6.value)* 0.30479924241959993614;
    else if(InputTypeValue6 === "foot per second" && ResultTypeValue6 === "foot per second")
      result6.value = input6.value;
    else if(InputTypeValue6 === "foot per second" && ResultTypeValue6 === "kilometer per hour")
      result6.value = Number(input6.value)* 1.0972772727104720403;
      else if(InputTypeValue6 === "foot per second" && ResultTypeValue6 === "knot")
      result6.value = Number(input6.value)* 0.59248232918927190571;
    

      if(InputTypeValue6 === "meter per second" && ResultTypeValue6 === "foot per second")
      result6.value = Number(input6.value)* 3.2808317404855635857;
    else if(InputTypeValue6 === "meter per second" && ResultTypeValue6 === "mile per hour")
      result6.value = Number(input6.value)* 2.2369307321492479801;
    else if(InputTypeValue6 === "meter per second" && ResultTypeValue6 === "meter per second")
      result6.value = input6.value;
    else if(InputTypeValue6 === "meter per second" && ResultTypeValue6 === "kilometer per hour")
      result6.value = Number(input6.value)* 3.5999910521997113833;
      else if(InputTypeValue6 === "meter per second" && ResultTypeValue6 === "knot")
      result6.value = Number(input6.value)* 1.943839662694461623;


      if(InputTypeValue6 === "kilometer per hour" && ResultTypeValue6 === "foot per second")
      result6.value = Number(input6.value)* 0.91134215013495156743;
    else if(InputTypeValue6 === "kilometer per hour" && ResultTypeValue6 === "meter per second")
      result6.value = Number(input6.value)* 0.27777708736113326804;
    else if(InputTypeValue6 === "kilometer per hour" && ResultTypeValue6 === "kilometer per hour")
      result6.value = input6.value;
    else if(InputTypeValue6 === "kilometer per hour" && ResultTypeValue6 === "mile per hour")
      result6.value = Number(input6.value)* 0.62136964781928527568;
      else if(InputTypeValue6 === "kilometer per hour" && ResultTypeValue6 === "knot")
      result6.value = Number(input6.value)* 0.5399554618596158484;


      if(InputTypeValue6 === "knot" && ResultTypeValue6 === "foot per second")
      result6.value = Number(input6.value)* 1.6878056605916480493;
    else if(InputTypeValue6 === "knot" && ResultTypeValue6 === "meter per second")
      result6.value = Number(input6.value)* 0.5144431653483343414;
    else if(InputTypeValue6 === "knot" && ResultTypeValue6 === "knot")
      result6.value = input6.value;
    else if(InputTypeValue6 === "knot" && ResultTypeValue6 === "kilometer per hour")
      result6.value = Number(input6.value)* 1.8519953952538554809;
      else if(InputTypeValue6 === "knot" && ResultTypeValue6 === "mile per hour")
      result6.value = Number(input6.value)* 1.1507765867670327609;


}