import { useState } from "react";

const StatesinFBC = () => {
    const [count, setCount] = useState(0); //[undefine, function]

    const incrementCount = () => {
        setCount(count + 1);
       
    };
    const decrementCount = () => {
        setCount(count - 1 );
    }
    const reset = () => {
        setCount(0)
    }


    return (
        <>
        <h1>Learn States in Function Based</h1>
        <h2>Counter :{count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount} disabled={count === 0 ? true : false}>Decrement</button>
        <button onClick={reset} disabled={count === 0 ? true : false }>Reset</button>
         
        </>
    );
}

export default StatesinFBC;







//! What is State ?
// In react , State is a component's "memory". It is an object used to store data that changes over time,
// such as user input , a shopping cart, or whether a toggle is active

//! What is usestate?
// useState is a React Hook that lets you add a state variable to your component.

//! How it works(The Syntax)?
// when you use it, it always returns an array consists of:
// 1) The current value ( what's currently in the memory box)
// 2) A function to update it ( the tool to put something new in the box).