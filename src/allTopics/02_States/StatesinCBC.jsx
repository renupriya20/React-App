import { Component } from "react";

class StatesinCBC extends Component {
    constructor() {
        super();
        this.state = { data: "Hello World" };
    }

    updateState = () => {
        this.setState({ data: "Byee World"});
    }
    render() {
        console.log(this);

        return (
            <>
                <h1>Learn States in Class Based</h1>
                <h2>{this.state.data}</h2>
                <button onClick={this.updateState}>Change</button>
            </>
        )
    }

};

export default StatesinCBC;