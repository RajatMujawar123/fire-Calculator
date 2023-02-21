import { CALCULATOR_ONCLICK } from "./actions"
import { INPUT_ON_CHANGE } from "./actions"

const handleInputChange =(type,value) =>{
return{
    type : INPUT_ON_CHANGE,
    payload : {type , value}
}
}

const handleCalculatorOnclick = (state) =>{

    const {expToday,curAge,retAge,infliation} = state 

    let resYearExpToday = (Number(expToday) * 12).toFixed(2);

    const ageDiff = Number(retAge) - Number(curAge)
    let resYearExpRet  = (resYearExpToday * ( 1 + Number(infliation)/100) ** ageDiff).toFixed(2);

    let resFireNumber = (Number(resYearExpRet) * 25).toFixed(2) ;

    resYearExpToday = resYearExpToday.toString();
    resYearExpRet = resYearExpRet.toString();
    resFireNumber = resFireNumber.toString();

    return{
        type : "CALCULATOR_ONCLICK",
        payload : {resYearExpToday,resYearExpRet,resFireNumber}
    }
}


export { handleInputChange , handleCalculatorOnclick}