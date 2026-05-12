const Child2 = (props) => {
    console.log(props);

    let {data1, data2, data3:{name}} = props()
     console.log(data1)
     

    
    return (
        <>
        <h2>Child2 Component</h2>
        <h2>{prop.data1}{props.data2}{prop.name}</h2>
        
        </>
    )
};

export default Child2;