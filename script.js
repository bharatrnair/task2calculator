var buttons =  document.getElementsByTagName("button");
// console.log(buttons)
var inputString = "";
var outputString = "";
var operantsArray = [];
var operatorsArray = [];
var isLastoperator = true;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",callAction);
}

function callAction(event)
{
    var button=event.target;
    var value=button.innerHTML;
    var actionType = button.classList[0] === "red-text"?"operator":"operant";
    if(value === "="){
        calculateAnswer()
    }
    else{
        if(addInput(actionType,value))
        inputString += value;
    }
    console.log(operantsArray,operatorsArray);
    inputfield()
    outputfield()
}


    function inputfield()
        {
          document.getElementsByClassName("input-container")[0].innerHTML=inputString || 0;
        
    

    // if(inputString===" "){
        // document.getElementsByClassName("input-container")[0].innerHTML=0;

    // }
    // else{
        // document.getElementsByClassName("input-container")[0].innerHTML=inputString;
    // }
// }
}
function outputfield()
{
    document.getElementsByClassName("output-container")[0].innerHTML=outputString || 0;
}
function addInput(actionType,value){

    if(actionType === "operator"){
        if(isLastoperator)return false;
        operatorsArray.push(value);
        isLastoperator = true;
        return true

    }
    if(isLastoperator){
        operantsArray.push(value)
        isLastoperator = false;
        return true
    }
    operantsArray[operantsArray.length - 1] += value;
    return true;
}

function calculateAnswer () {
    for(var j=0;j<2;j++){
        for(var i=0;i<operantsArray.length;i++){
            if(j===0 &&(operantsArray[i]=== "*" || operantsArray[i]=== "/" )){
               PerformAction(i);
        }
        if(j!==0){
            PerformAction(i);
        }
    }
}
   outputString = operantsArray[0]
}
function PerformAction(index){
    var result = 0;
    switch(operatorsArray[index]){
        case "+":
            result = Number(operantsArray[index]) + Number(operantsArray[index+1])
        break;
        case "-":
            result = operantsArray[index] - operantsArray[index+1]
        break;
        case "*":
            result = operantsArray[index] * operantsArray[index+1]
        break;
        case "/":
            result = operantsArray[index] / operantsArray[index+1]
        break;
    }

operantsArray[index] = result;
operantsArray.splice(index+1,1);
operatorsArray.splice(index,1);

}