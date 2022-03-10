var buttons =  document.getElementsByTagName("button");
var inputString = "";
var outputString = "";
var operantsArray = "";
var operatorsArray = "";
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
        addInput(actionType,value)
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

        operatorsArray.push(value);
        isLastoperator = true;
        return

    }
    if(isLastoperator){
        operantsArray.push(value)
        isLastoperator = false;
        return
    }
    operantsArray[operantsArray.length - 1] += value;
}