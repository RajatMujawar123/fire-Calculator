
import { INPUT_ON_CHANGE, CALCULATOR_ONCLICK } from "./actions"

const reducer =(state , action) =>{

switch(action.type){

    case INPUT_ON_CHANGE : 
    const {type , value} = action.payload
    return {...state , [type] : value  }

    case CALCULATOR_ONCLICK : 
    const {resYearExpToday,resYearExpRet,resFireNumber} = action.payload
    return {...state , resYearExpToday, resYearExpRet, resFireNumber  }

    default : return state
}
}

export default reducer