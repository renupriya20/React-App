import { useState } from "react";

const ToogleComponent = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Hello World");
    const updateToggle = () => {
        setToggle((prev) => !prev);
    };
  return (
    <>
    <h1>{data}</h1>
    <button onClick={() => setData("Bye World")}>Change</button>
    <hr/>
    <button onClick={updateToggle}>Toogle me</button>
    {toggle && <h1>toogle Example</h1>}
    </>
  );
};

export default ToogleComponent;