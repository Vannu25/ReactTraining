import React ,{Component} from 'react';
import SMChildComponent from './SMChildComponent';
//

import Child from './SMChildComponent';


class SMParentClassComponent extends Component{
    state = {balance:0};
    onProfit =()=>{
        this.setState ({balance: this.state.balance + 1});
    }
    render(){
        return<><h1> Parent : {this.state.balance} </h1>
        <button onClick={this.onProfit}>Family Profit</button>
         <SMChildComponent name = {"vannu"} onProfit = {this.onProfit}/>
         <SMChildComponent name = {"sheba"} onProfit = {this.onProfit}/> 
        </>

        
        
       
    }
 
 } 
 export default SMParentClassComponent;