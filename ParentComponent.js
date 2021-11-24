import { Component } from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component{
    state = {balance:0};
    onProfit =()=>{
        this.setState ({balance: this.state.balance + 1});
    }
    onExpense =()=>{
        if(this.state.balance === 0){
            return;
        }
        this.setState ({balance: this.state.balance - 1});
    }

    render(){
        
        return<>
        <h1> FamilyBalance : {this.state.balance} </h1>
        <button onClick = {this.onProfit}> Family Profit</button>
        <button onClick = {this.onExpense}> Family Expense</button>
        <ChildComponent name = {"vannu"} onProfit = {this.onProfit} onExpense = {this.onExpense} />
        <ChildComponent name = {"sheba"} onProfit = {this.onProfit} onExpense = {this.onExpense} /> 
        
        </>
    }
}
export default ParentComponent;
