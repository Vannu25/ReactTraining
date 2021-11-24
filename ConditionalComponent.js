import { Component } from "react";

class ConditionalComponent extends Component{
    state = {showText: true};

    onToggleTextShow =()=>{

        this.setState ({showText : !this.state.showText});
    }
    render(){
        return<>
                {this.state.showText && <h1> TextField </h1>}
          <button onClick = { this.onToggleTextShow}> {this.state.showText ? "Hide" : "show" }</button>
        </>
    }
  

}
export default ConditionalComponent;