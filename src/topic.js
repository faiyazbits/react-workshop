import React from "react";
import './App.css';

export class Topics extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            topic1: '',
            topic2: '',
            topic3: '',
            topic4:'',
            topic5:''
        }
    }
showTopics = () => {
        this.setState({
            topic1:"Functional component",
            topic2:"Class component",
            topic3: "styling",
            topic4:"Event Binding",
            topic5:"Changing UI by calling setState"
        })
        
    }

    render(){
        return (
            <React.Fragment>
                
<button className ="addTopics" onClick = {this.showTopics}>Topics</button>
<ul className ="topiclist">
    <li>{this.state.topic1}</li>
    <li>{this.state.topic2}</li>
    <li>{this.state.topic3}</li>
    <li>{this.state.topic4}</li>
    <li>{this.state.topic5}</li>

</ul>
                
            </React.Fragment>
        )
    }
}
export default Topics;