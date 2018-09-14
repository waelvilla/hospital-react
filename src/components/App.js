import React, { Component } from 'react'
import Login from './Login'
import UserInterface from './UserInterface'
class App extends Component {

  constructor(){
    super()
    this.state={
      role:'',
      roles:[],

    }

    this.checkUser=this.checkUser.bind(this)
    this.db={
      Doctor: ["Dexter","Hannibal","d"],
      Nurse: ["Jennie","Sophie","n"],
      Patient: ["Aaron","Sarah","p"],
      Admin: ["Omar","a"],
    }
  }
  componentWillMount(){
    let roles=[]
    for(var role in this.db){
      roles.push(role)
    }
    this.setState({
      roles
    })
  }
  checkUser(role,username){
    if(this.db[role].includes(username))
      this.setState({         
        role
      })
  }

  render() {
    
    console.log(this.state.role)      
    if(!this.state.role)
    return (
      <div className="App">
        <Login creds={this.checkUser} />
      </div>
    )
    else
      return(
        <div>Logged in as {this.state.role}
          <UserInterface role={this.state.role} users={this.db} roles={this.state.roles}/>
        </div>
        
      )
    
  }
}

export default App