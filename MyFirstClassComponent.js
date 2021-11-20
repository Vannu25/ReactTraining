import React, { Component } from "react";

class MyFirstClassComponent extends Component{
    state = {balance : 0};
    balanceIncrement = (value)=> {
        this.setState ({balance: this.state.balance + value});

    };
    onProfitClickHandler = () => {
        console.log('I am clicked now');
        this.balanceIncrement(1);
    };
    onDoubleProfitClickHandler = () => {
        console.log('I am clicked now');
        this.balanceIncrement(1000);
    };
    render(){
        const {name,age} = this.props;
       return <>
        <h1> Hello I am  {name= "vannu"}, {age=24} years old and my balance is {" "}
        {this.state.balance} in account {this.props.accountNumber}
         </h1>
         <h1> Hello I am  {name= "sheba"}, {age=24} years old and my balance is {" "}
        {this.state.balance} in account {this.props.accountNumber}
         </h1>
        )
     <button onClick= {this.ProfitClickHandler}>
         Click me and see the magic
         </button>
         <br></br>
         <button onClick= {this.onProfitClickHandler}>
         Click me and see the magic
         </button>   
         </>
    }
}

export default MyFirstClassComponent;