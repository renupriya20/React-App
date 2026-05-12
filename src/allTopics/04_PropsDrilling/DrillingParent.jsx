import Child  from "./Child";
const DrillingParent = () => {
    let str = "Hello World"
    let arr = [10, 20];
    let obj = { username: "priya"}
    let greet = ()=> console.log("welcome");
    

    return (

       
        <>
            <h2> DrillingParent Component</h2>
            <Child  str = {str} arr= {arr} obj = {obj} greet = {greet}/>
        </>
    );
};

export default DrillingParent;