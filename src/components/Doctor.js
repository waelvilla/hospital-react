import React from 'react'

class Doctor extends React.Component{

    render(){
        if(this.props.active)
            return(
                <div>
                    Doctor
                </div>
            )
        return(
            <span></span>
        )
    }
}


export default Doctor