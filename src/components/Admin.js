import React from 'react'

class Admin extends React.Component{


    
    handleSubmit(role){
        let Employees= ''
        
    }
    render(){
        if(this.props.active)
            return(
                <div>
                    <button onClick={()=>this.handleSubmit('Employees')}>Manage Employees</button>
                    <br />
                    <button onClick={()=>this.handleSubmit('Patients')}>Manage Patients</button>
                    
                </div>
            )
        return(
            <span></span>
        )

        
    }
}

export default Admin