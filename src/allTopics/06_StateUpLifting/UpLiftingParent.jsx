import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const UpLiftingParent = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Learn State UpLifting Component</h2>
            <ChildA count={count} />
            <ChildB setCount={setCount} />
        </>
    );
};

export default UpLiftingParent;