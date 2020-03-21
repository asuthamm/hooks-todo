import React, { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 2 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterReducer({ initialCount = 0}) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>+2</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </>
  );
}
export default CounterReducer;