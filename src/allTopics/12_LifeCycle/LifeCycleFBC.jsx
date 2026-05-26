import { useEffect, useState, useRef } from "react";

const LifeCycleFBC = () => {
    const[count, setCount] = useState(0);
    const initialRender = useRef(true);
   const  handleCount = () => setCount((prev) => prev + 1 );

   useEffect(() => {
    console.log("Component Mounted");
    const id = setInterval(() => console.log("API Called"), 2000);
    
    return () => { 
        //Clean-Up Function
        clearInterval(id);
        console.log("Component UnMounted");
        
    }
   }, []);


   useEffect(() => {
    if(initialRender.current){
        initialRender.current = false;
        return;
    }
    console.log("Component Updated");
    
   }, [count]);

    return (
        <div>
            <h1>Learn Life Cycle in FBC {count}</h1>
            <button onClick={handleCount}>update</button>
        </div>
    )
}
export default LifeCycleFBC;