import React from 'react'
import { useReducer } from 'react'

const Counter = () => {

const reducer = (state,action) =>{
switch(action.type){

case "ADD_COUNT" : return {...state , count : state.count + 1};

case "REDUCE_COUNT" : return {...state , count : state.count - 1}

default : return state
}
}

const store = {
count : 0
}

    const [state,dispatch] = useReducer(reducer, store)
  return (
    <div>
      <h1>Counter App</h1>
      <h1>Count : {state.count}</h1>
      <button onClick={() =>dispatch({type:"ADD_COUNT"})}>ADD</button>
      <button disabled={state.count === 0} onClick={() =>dispatch({type:"REDUCE_COUNT"})}>Reduce</button>
    </div>
  )
}

export default Counter
