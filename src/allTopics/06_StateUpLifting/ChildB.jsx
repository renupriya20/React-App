const ChildB = ({ setCount }) => {


    return (
        <>
            <h2>Child B Component </h2>
            <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        </>
    )

};
export default ChildB;