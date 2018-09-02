import React from 'react'

class Patient extends React.Component{

    render(){
        if(this.props.active)
            return(
                <div>
                    Patient
                </div>
            )
        return(
            <span></span>
        )
    }
}

export default Patient