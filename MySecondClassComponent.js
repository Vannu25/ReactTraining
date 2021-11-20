import React, { Component } from "react";

class MySecondClassComponent extends Component{
    render(){
        const {name,age} = this.props;
        return(
        <h1> Hello from MySecondClassComponent {name} {age} </h1>
        )
        return <h1>
            hello from MySecondClassComponent {name} {age}
        </h1>
    }
}
export default MySecondClassComponent;