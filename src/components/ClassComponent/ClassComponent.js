import { Component } from "react";

export default class ClassComponent extends Component {
    constructor (){
        super()
        this.state ={
            name:"Belen",
        }
    }
    changeName=()=>{
        this.setState({
            name:"alejandro",
        })
    }
    render(){
        return (<div> Mi nombre es {this.state.name}
        <button onClick={this.changeName}> Cambia elnombre</button>
        </div>)
    }
}
