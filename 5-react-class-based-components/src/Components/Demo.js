import {Component} from 'react';
import Paragraph from './Paragraph';

class Demo extends Component{
    constructor(){
        super();
        this.state = { showParagraph: true, count: 0};
    }

    componentDidMount(){
        //LOGIC TO HANDLE SIDE EFFECTS
        console.log("componentDidMount Called!");
    }

    componentDidUpdate(prevProps, prevState){
        //LOGIC TO HANDLE SIDE EFFECTS WHENEVER STATE CHANGES
        // console.log("componentDidUpdate Called!");
        // if(prevState.count != this.state.count)
        //     this.setState({count: this.count + 1});
        // try{
        //     throw new Error("An error has occured!");
        // } catch(error){
        //     alert(error.message);
        // }
        throw new Error("An error has occured!");
    }

    toggleParagraph(){
        //this.state.showParagraph = false;//NOT
        //console.log(this)
        this.setState((currState) => {
            return {showParagraph: !currState.showParagraph}
        })
    }

    render(){
        return <>
            <h3>{this.props.name}</h3>
            {this.state.showParagraph && <Paragraph></Paragraph>}
            <button onClick={this.toggleParagraph.bind(this)}>{this.state.showParagraph ? 'Hide' : 'Show'}</button>
        </>
    }
}

export default Demo;