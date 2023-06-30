var input3 = document.getElementById('input3');
var result3 = document.getElementById('result3');
var InputType3 = document.getElementById('InputType3');
var ResultType3 = document.getElementById('ResultType3');
var InputTypeValue3, ResultTypeValue3;

//add listener
input3.addEventListener("keyup",myResult);
InputType3.addEventListener("change",myResult);
ResultType3.addEventListener("change",myResult);

//take initial values
InputTypeValue3 = InputType3.value;
ResultTypeValue3 = ResultType3.value;


function myResult(){

//compare the input and result values and then add formula

    InputTypeValue3 = InputType3.value;
    ResultTypeValue3 = ResultType3.value;

//-------------------FOR TIME CONVERTER----------------


    if(InputTypeValue3 === "second" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 1000;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 1000000;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "second")
        result3.value = input3.value;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 1000000000;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 0.0166667;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*0.000277778;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 0.000011574;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*0.0000016534;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 0.00000038052;
    else if(InputTypeValue3 === "second" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*0.00000003171;


        if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)* 0.001;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 1000;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "millisecond")
        result3.value = input3.value;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 1000000;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 0.000016667;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*0.00000027778;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 0.000000011574;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*0.0000000016534;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 0.00000000038052;
    else if(InputTypeValue3 === "millisecond" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*0.00000000003171;


        if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 0.001;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)* 0.000001;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "microsecond")
        result3.value = input3.value;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 1000;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 0.000000016667;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*0.00000000027778;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 0.000000000011574;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*0.0000000000016534;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 0.00000000000038052;
    else if(InputTypeValue3 === "microsecond" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*0.00000000000003171;


        if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 0.000001;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 0.001;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "nanosecond")
        result3.value = input3.value;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)* 0.000000001;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 1.6667e-11;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*2.7778e-13;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 1.1574e-14;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*1.6534e-15;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 3.8052e-16;
    else if(InputTypeValue3 === "nanosecond" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*3.171e-17;


        if(InputTypeValue3 === "minute" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 60000;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 6e+7;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "minute")
        result3.value = input3.value;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 6e+10;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)* 60;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*0.0166667;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 0.000694444;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*9.9206e-5;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 2.2831e-5;
    else if(InputTypeValue3 === "minute" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*1.9026e-6;


        if(InputTypeValue3 === "hour" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 3.6e+6;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 3.6e+9;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "hour")
        result3.value = input3.value;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 3.6e+12;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 60;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)*3600;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 0.0416667;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*0.00595238;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 0.00136986;
    else if(InputTypeValue3 === "hour" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*0.000114155;


        if(InputTypeValue3 === "day" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 8.64e+7;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 8.64e+10;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "day")
        result3.value = input3.value;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 8.64e+13;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 1440;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*24;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)* 86400;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*0.142857;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 0.0328767;
    else if(InputTypeValue3 === "day" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*0.00273973;


        if(InputTypeValue3 === "week" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 6.048e+8;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 6.048e+11;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "week")
        result3.value = input3.value;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 6.048e+14;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 10080;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*168;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 7;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)*604800;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 0.230137;
    else if(InputTypeValue3 === "week" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*0.0191781;


        if(InputTypeValue3 === "month" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 2.628e+9;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 2.628e+12;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "month")
        result3.value = input3.value;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 2.628e+15;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 43800;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*730.001;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 30.4167;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*4.34524;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)* 2.628e+6;
    else if(InputTypeValue3 === "month" && ResultTypeValue3 === "year")
        result3.value = Number(input3.value)*0.0833334;


        if(InputTypeValue3 === "year" && ResultTypeValue3 === "millisecond")
        result3.value = Number(input3.value)* 3.154e+10;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "microsecond")
        result3.value = Number(input3.value)* 3.154e+13;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "year")
        result3.value = input3.value;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "nanosecond")
        result3.value = Number(input3.value)* 3.154e+16;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "minute")
        result3.value = Number(input3.value)* 525600;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "hour")
        result3.value = Number(input3.value)*8760;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "day")
        result3.value = Number(input3.value)* 365;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "week")
        result3.value = Number(input3.value)*52.1429;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "month")
        result3.value = Number(input3.value)* 12;
    else if(InputTypeValue3 === "year" && ResultTypeValue3 === "second")
        result3.value = Number(input3.value)*3.154e+7;



}