import React from "react";
import './App.css';

export class ToDoInput  extends React.Component{
constructor(props){
    super(props)
    this.state ={
        value:''
    }
    this.addTask = this.addTask.bind(this)
    this.enterTaskItem = this.enterTaskItem.bind(this)

}
addTask(event){
    // alert(this.state.value)
    this.setState({
        value:event.target.value
    })
    event.preventDefault();
}
enterTaskItem(event){
    
       this.state.value = event.target.value
    
}

    render(){
        return(
        <React.Fragment>
            
            <form onSubmit = {this.addTask}>
            
<input type="text" placeholder ="Enter Task" id = "inputBox" value={this.state.value} onChange ={this.enterTaskItem} ></input>
<input type = "submit" value = "add" id ="addtask"/>
</form>
 
<ul>
<li>{this.state.value}</li>
</ul>
</React.Fragment>
        )
    }
}
