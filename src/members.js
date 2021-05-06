import React from "react";
import './App.css';

export class Members extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            member1: '',
            member2: '',
            member3: ''
        }
    }

    showMembers = () => {
        this.setState({
            member1:"Sheerin Sidhara",
            member2:"Rahmath Marzooka",
            member3: "Ithris Shafi"
        })
        
    }

    render(){
        return (
 <React.Fragment>
                
    <button className ="addbtn" onClick = {this.showMembers}>Members</button>
    <ul className ="memberlist">
    <li>{this.state.member1}</li>
    <li>{this.state.member2}</li>
    <li>{this.state.member3}</li>
    </ul>
                
</React.Fragment>
        )
    }
}
export default Members;