import React, { Component } from 'react'
import User from './user'

class Users extends Component{
    state={
        user:[
            {
                name:"meet",
                age:20
            },
            {
                name:"Urvish",
                age:22
            },
            {
                name:"Gaurav",
                age:25
            },
        ],
        title:"List of Users",
        myName:"Meet Shah",
    }
    changeMyAge = () => {
        const updatedAge = this.state.user.map((user)=>
        {   const temp = user;
            temp.age += 10;
            return temp;
        })
        
        this.setState({
            updatedAge,

        })
    }
    render(){
        return (
            <div>
                <button onClick={this.changeMyAge}>Make Us 10 Year Older</button>
                <h1>{this.state.title}</h1>
                {
                    this.state.user.map((user)=>{
                        return <User age={user.age}>{user.name}</User>
                    })
                }
            </div>
        )
    }
}
export default Users;