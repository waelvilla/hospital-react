import React, { Component } from 'react'
import Login from './Login'
import UserInterface from './UserInterface'
import Auth from './Auth'
import md5 from 'md5'

class App extends Component {

  constructor(){
    super()
    this.state={
      user: '',
      role:'',
      roles:[],

    }

    this.checkUser=this.checkUser.bind(this)
    this.db={
      Doctor: [{"Dexter":'dfdf'},
      "Hannibal",
      "d",
    ],
      Nurse: ["Jennie",
      "Sophie",
      "n",
    ],
      Patient: ["Aaron",
      "Sarah",
      "p",
    ],
      Admin: ["Omar",
      "a",
    ],
    }
    //Doctor &Nurse: LENGTH,name, specialization, address, phone
    this.secret="30a3e620ee188e0c827091fa27e3b428" 
    
  }
  componentDidMount(){
    console.log("--- did mount ---");
    
    
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
        user:username,         
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
        <div>
          <div>
            
            <h1 className="title"> UC Hospital</h1>
            <span>Logged in as {this.state.role} {this.state.user}</span> 
          </div>
          <hr />
          <UserInterface role={this.state.role} users={this.db} roles={this.state.roles}/>
        </div>
        
      )
    
  }
}

export default App