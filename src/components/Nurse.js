import React from 'react'


class Nurse extends React.Component{

    render(){
        if(this.props.active)
            return(
                <div>
                    Nurse
                </div>
            )
        return(
            <span></span>
        )
    }
}

export default Nurse