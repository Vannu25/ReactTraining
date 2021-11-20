import React ,{Component} from 'react';

class SMChildComponent extends Component{

    render(){
        const {name,onProfit} = this.props
        return(
        <>
        <h1> {name} </h1>
        <button onClick = {onProfit}>Profit</button>
        </>
        );
    }
}
export default SMChildComponent;