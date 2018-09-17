import React from 'react'

class Admin extends React.Component{
    constructor(){
        super()
        
        this.state={
            Persons:[],
            roles:[],
            role:'',
            
        }
    }
    componentWillMount(){
        this.setState({
            roles: this.props.roles
        })        
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
        this.setState({
            Persons
        })
        console.log(Persons);
        
    }
    render(){
        console.log("---admin render----");
        
        if(this.props.active )
            return(
                <div>
                    {this.state.roles.map((role)=>(
                        <div key={role}>
                            <button onClick={()=>this.handleSubmit(role)}>Manage {role}</button>
                        </div>
                    ))}
                    <div className="display-persons">
                        {this.state.Persons.map((person)=>(
                            <div key={person}>{person}</div>
                        ))}
                    </div>
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