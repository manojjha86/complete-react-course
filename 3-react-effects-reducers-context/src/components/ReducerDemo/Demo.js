import './Demo.css';
import { useReducer } from 'react';

function reducer(currState, action){
    switch(action){
        case 'increment':
            return {count: currState.count + 1};
        case 'decrement':
            return {count: currState.count - 1};
        default:
            return currState;
    }
}

function Demo(){
    let[state, dispatcher] = useReducer(reducer, {count: 0});

    function decrementHandler(){
        dispatcher('decrement')
    }

    function incrementHandler(){
        dispatcher('increment')
    }

    return <div className="container">
        <button onClick={decrementHandler}> - </button>
        <span>{state.count}</span>
        <button onClick={incrementHandler}> + </button>
  </div>
}

export default Demo;