import React from 'react'
import { useReducer } from 'react'
import reducer from '../Reducer/reducer'
import store from '../Reducer/store'
import style from "../Styles/FireCalculator.module.css"
import { handleInputChange,handleCalculatorOnclick } from '../Reducer/actionCreator'

const FireCalculator = () => {
const [state,dispatch] = useReducer(reducer , store)

  return (
    <div>
      <h1>How Much Money You Need In Future</h1>

      <div className={style.container}>

        <div className={style.inner} >
            <input value={state.expToday} type="text" placeholder='Monthly Expense' onChange={(e)=>dispatch (handleInputChange("expToday" , e.target.value))} />
            <input value={state.curAge} type="text" placeholder='Current Age' onChange={(e)=>dispatch (handleInputChange("curAge" , e.target.value))}/>
            <input value={state.retAge} type="text" placeholder='Retirment' onChange={(e)=>dispatch (handleInputChange("retAge" , e.target.value))}/>
            <input value={state.infliation} type="text" placeholder='Infliation Rate %' onChange={(e)=>dispatch (handleInputChange("infliation" , e.target.value))}/>
            <button onClick={()=>dispatch(handleCalculatorOnclick(state))}>Calculate fire</button>
        </div>


        <div className={style.inner1}>
            <h3>Yearly Expense (As of today) - {state.resYearExpToday}  </h3>
            <h3>Yearly expense (As of Retriment) - {state.resYearExpRet}</h3>
            <h3>Your Fire Number - {state.resFireNumber} </h3>
        </div>
      </div>
    </div>
  )
}

export default FireCalculator
