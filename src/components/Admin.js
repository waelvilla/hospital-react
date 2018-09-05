import React from 'react'

class Admin extends React.Component{

    handleSubmit(ex){
        console.log(ex);
        
    }
    render(){
        if(this.props.active)
            return(
                <div>
                    <button onClick={()=>this.handleSubmit('no')}>Manage Employees</button>
                    <br />
                    <button onClick={()=>this.handleSubmit('ok')}>Manage Patients</button>
                    
                </div>
            )
        return(
            <span></span>
        )

        
    }
}

export default Admin