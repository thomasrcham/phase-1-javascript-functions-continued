let sentence = "";


function saturdayFun (activity = "roller-skate"){
    sentence = (`This Saturday, I want to ${activity}!`);
    return sentence;
}

function mondayWork (activity = "go to the office"){
    sentence = (`This Monday, I will ${activity}.`);
    return sentence;
}

function wrapAdjective (symbol){
    if (symbol === "*"){
    return function (){
        let sentence = `You are ${symbol}a hard worker${symbol}!`
        return sentence;}
    } else {
        return function (){
            let sentence = `You are ${symbol}a dedicated programmer${symbol}!`
            return sentence;}
    }
}