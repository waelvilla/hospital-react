import React, { Component } from 'react'
import Login from './Login'
import UserInterface from './UserInterface'
class App extends Component {

  constructor(){
    super()
    this.state={
      role:'',

    }

    this.setRole=this.setRole.bind(this)
    this.db={
      Doctors: [],
      Nurses: [],
      Patients: [],
      Other: [],
    }
  }
  
    setRole(role){
      this.setState({
        role
      })
    }

  render() {
      console.log(this.state.role)
    if(!this.state.role)
    return (
      <div className="App">
        <Login creds={this.setRole} />
      </div>
    )
    else
      return(
        <div>Logged in as {this.state.role}
          <UserInterface role={this.state.role}/>
        </div>
        
      )
    
  }
}

export default App