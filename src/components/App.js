import React, { Component } from 'react'
import Login from './Login'
import UserInterface from './UserInterface'
// import Auth from './Auth'
// import md5 from 'md5'

class App extends Component {

  constructor(){
    super()
    this.state={
      user: '',
      role:'',
      roles:[],
      Doctors: [],
      Nurses: [],
      Patients: [],
      Admins: [],
      loading:true,
      cantFetch:false,
      db: [],
    }

    this.checkUser=this.checkUser.bind(this)
    this.fetchUsers=this.fetchUsers.bind(this)
    this.setRoles=this.setRoles.bind(this)
    // this.db=[this.state.Doctors,this.state.Nurses,this.state.patients,this.state.Admins]
    //   Doctor: [{"Dexter":'dfdf'},
    //   "Hannibal",
    //   "d",
    // ],
    //   Nurse: ["Jennie",
    //   "Sophie",
    //   "n",
    // ],
    //   Patient: ["Aaron",
    //   "Sarah",
    //   "p",
    // ],
    //   Admin: ["Omar",
    //   "a",
    // ],

    //Doctor &Nurse: LENGTH,name, specialization, address, phone
    this.secret="30a3e620ee188e0c827091fa27e3b428" 
    
    
  }
  componentDidMount(){
    console.log("--- did mount ---");
    // https://api.jsonbin.io/b/5ba2854120f16433785be658/3       
    this.fetchUsers();
    
  }

  fetchUsers(){
    this.setState({
      loading: true,
    })
    
    fetch("https://api.jsonbin.io/b/5ba2854120f16433785be658/3")
    .then((encodedText => encodedText.json()))
    .then((loadedUsers)=>{      
        let users=Object.keys(loadedUsers)
        for(var i in users){
          this.setState(
            this.state[users[i]]=loadedUsers[users[i]])
        }
        this.setState({
          loading: false,
          db: loadedUsers

        })
        this.setRoles()        
      })
    .catch(error => {
        console.warn(error)
        this.setState({
          cantFetch:true,
        })
    }) 
    
  }
  
  setRoles(){
    let roles=Object.keys(this.state.db)
    this.setState({
      roles
    })

  }
  checkUser(role,username){
    let roleInState=role+"s"
    if(Object.keys(this.state[roleInState]).includes(username))
      this.setState({
        user:username,         
        role
      })
  }

  render() {
    console.log("---render---");
    
    if(this.state.loading  && !this.state.cantFetch)
      return(
        <h1> Loading.... </h1>
      )
      if(this.state.cantFetch)
        return(
          <p>Error: The application could not load the data. Please check your connection. </p>
        )
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
          <UserInterface role={this.state.role} users={this.state.db} roles={this.state.roles}/>
        </div>
        
      )
    
  }
}

export default App