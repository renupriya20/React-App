import NestedChild from "./NestedChild";

const Child = ( props ) => {
    console.log("Child");
    
   
    return (
        <>
            <h2>Child Component</h2>
            
            <NestedChild props={props}/>
        </>
    );
};

export default Child;