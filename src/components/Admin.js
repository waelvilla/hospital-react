import React from 'react'

class Admin extends React.Component{

    render(){
        if(this.props.active)
            return(
                <div>
                    Admin
                </div>
            )
        return(
            <span></span>
        )

        
    }
}

export default Admin