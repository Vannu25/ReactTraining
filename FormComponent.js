import React,{Component} from "react";
export default class FormComponent extends Component{
    state={
        name:"",
        age:0,
    };
    onValueChnageHandler = (event) =>{
        console.log(event.target.name);
        //this.setState({name : event.target.value});
        this.setState({[event.target.name] : event.target.value});
    }
    // onAgeChnageHandler = (event) =>{
    //     console.log(event.target.age);
    //     this.setState({[event.target.age] : event.target.value});
    // }
    onFormSubmitHandler = (event) =>{
        event.preventDefault();
        console.log("In onSubmit");
        console.log(this.state);
    }
  
    render(){
        return(
            <>
            <h1>Person Form</h1>
            <form onSubmit={this.onFormSubmitHandler}>
            <label>Name:</label>
            <input name = {"name"} value={this.state.name} 
            onChange={this.onValueChnageHandler}/>
            <br/>
            <label>Age:</label>
            <input name = {"age"} value={this.state.age} 
            onChange={this.onValueChnageHandler}/>
            <br/>
            <button type="submit">Submit</button>
            </form>
            </>
        )
    }

}

