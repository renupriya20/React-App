const Child3 = ({ prop1, prop2, prop3: { name } }) => {
    return (
        <>
            <h2>Child3 Component</h2>
            <h2>{prop1}{name}</h2>
            <p>{prop2}</p>
        </>
    )
};

export default Child3;