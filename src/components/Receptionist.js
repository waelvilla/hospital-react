import React from 'react'

class Receptionist extends React.Component {


    render(){
        if(this.props.active)
            return(
                <div>
                    Receptionist
                </div>
            )
        return(
            <span></span>
        )
    }

}


export default Receptionist