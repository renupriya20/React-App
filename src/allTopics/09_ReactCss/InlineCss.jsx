const InlineCss = () => {
const subHeadingStyle = { backgroundColor: "blue", color: "white"};
    return (
        <>
        <h1 style={{backgroundColor: "red"}}>Learn Inline css in React</h1>

        <h2 style={subHeadingStyle}> I am sub Heading</h2>
        </>
    );
};


export default InlineCss;