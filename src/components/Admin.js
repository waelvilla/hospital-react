import React from 'react'

class Admin extends React.Component{
    constructor(){
        super()
        this.state={
            Persons:[],
        }
    }

    
    handleSubmit(role){
        let Persons= ''
        let roles=this.props.users
        for(var r in roles){
            if(r===role){
                Persons=roles[r]
                break
            } 
        }
        console.log(Persons);
        
        
        
    }
    render(){
        console.log("---- render----");
        
        if(this.props.active && !this.state.Persons.length)
            return(
                <div>
                    <button onClick={()=>this.handleSubmit('Doctor')}>Manage Doctors</button>
                    <br />
                    <button onClick={()=>this.handleSubmit('Nurse')}>Manage Nurses</button>
                    <br />
                    <button onClick={()=>this.handleSubmit('Admin')}>Manage Admins</button>
                    <br />
                    <button onClick={()=>this.handleSubmit('Patient')}>Manage Patients</button>
                    
                </div>
            )
       
        else if(this.state.Persons.length)
            return(
                <div>

                </div>
            )

            return(
                <span></span>
            )

        
    }
}

export default Admin