import { useState } from "react";

const Heart = () => {
    const [like, setLikes] = useState(0);
    const updateLikes = () => {
        // setLikes(like + 1);
        // setLikes(like + 1);
        // setLikes(like + 1);
        setLikes((prev) => prev + 1);
        setLikes((prev) => prev + 1);
        setLikes((prev) => prev + 1);
    };
    return (
        <>
         <h1>Insta Like Button</h1>
        <span onClick={updateLikes}> ❤️<sup>{like}</sup></span>
        </>
    )
}
export default Heart;