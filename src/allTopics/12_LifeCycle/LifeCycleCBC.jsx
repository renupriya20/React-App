import { Component } from "react";

export default class LifeCycleCBC extends Component {
    constructor() {
        super();
        console.log("I am Contructor");
        this.state = { count: 0 };
    }
    increment = () => this.setState({ count: this.state.count + 1 });
    componentDidMount() {
        console.log("I am ComponentDidMount");
        this.intervalId = setInterval(() => {
            console.log("API called");
             },2000)

    }
    componentDidUpdate() {
        console.log("Component Updated");

    }

    componentWillUnmount(){
        console.log("Component is going to unMount");
        clearInterval(this.intervalId);
        
    }
    render() {
        console.log("I am render");
        return (
            <div>
                <h1>Count is {this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
            </div>
        )

    }
}

