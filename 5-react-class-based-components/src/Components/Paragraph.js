import { Component } from "react";
import DemoContext from "../DemoContext";

class Paragraph extends Component{
    static contextType = DemoContext;

    componentWillUnmount(){
        console.log("componentWillUnmount called!")
    }

    render(){
        return <p>{this.context.value}</p>
    }

    // render(){
    //     return <DemoContext.Consumer>
    //         {(ctx) => {
    //             return (<p>{ctx.value}</p>)
    //         }}
    //     </DemoContext.Consumer>
    // } 
}

export default Paragraph;