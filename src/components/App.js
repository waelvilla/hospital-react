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
      Doctors: {"d":{"name":"d","age":12,"Specialty":"GP"},"Hannibal":{"name":"Hannibal","age":42,"Specialty":"Internal Medicine"},"Dexter":{"name":"Dexter","age":38,"Specialty":"Surgery"}},
      Nurses: [],
      Receptionist:[],
      Patients: [],
      Admins: [],
      loading:true,
      cantFetch:false,
      db:{},
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

    this.secret="30a3e620ee188e0c827091fa27e3b428" 
    
  }
  componentDidMount(){
    console.log("--- app mount ---");
    // https://api.jsonbin.io/b/5ba2854120f16433785be658/3       
    this.fetchUsers();
    
  }

  fetchUsers(){
    this.setState({
      loading: true,
      db: {"Doctors":{"d":{"name":"d","age":13,"Specialty":"GP"},
                      "Hannibal":{"name":"Hannibal","age":42,"Specialty":"Internal Medicine"},
                      "Dexter":{"name":"Dexter","age":38,"Specialty":"Surgery"}},
            "Nurses":{"Jennie":{"name":"Jennie","age":"28","Specialty":"Internal Medicine"},
                      "Sophie":{"name":"Sophie","age":30,"Specialty":"Surgery"},
                      "n":{"name":"n","age":40,"Specialty":"Internal Medicine"}},
            "Patients":{"p":{"name":"p","age":"0","State":"all"},
                        "Aaron":{"name":"Aaron","age":"53","State":"Florida"},
                        "Sarah":{"name":"Sarah","age":"39","State":"California"}},
            "Admins":{"Omar":{"name":"Omar","age":32,"role":"DBA"},
                      "a":{"name":"a","age":"0","role":"admin"}}},

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
        console.log("---DB Connected---");
        
        this.setRoles()        
      })
    .catch(error => {
        console.warn(error)
        console.warn("Local DB will be used instead")
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
        // how tf
    let roleInState=role+"s"

    if(Object.keys(this.state[roleInState]).includes(username))
      this.setState({
        user:username,         
        role
      })
  }

  render() {
    console.log("---render---");
    console.log("Doctors: ",this.state.db.Doctors);
    
    if(this.state.loading  && !this.state.cantFetch)
      return(
        <h1> Loading.... </h1>
      )
      // if(this.state.cantFetch)
      //   return(
      //     <p>Error: The application could not load the data. Please check your connection. </p>
      //   )
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
          <UserInterface role={this.state.role} users={this.state.db} roles={this.state.roles} user={this.state.user}/>
        </div>
        
      )
    
  }
}

export default App