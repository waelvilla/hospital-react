import React from 'react'
import Doctor from './Doctor'
import Patient from './Patient'
import Nurse from './Nurse'
import Admin from './Admin'

class UserInterface extends React.Component {
    constructor(){
        super()
        this.state={
            isMed: false,
        }
    }
    componentDidMount(){
        if(this.props.role.search(/['DoctorNurse']/)===0)
        this.setState({
            isMed:true,
        })     
    }


    render(){
        
        return(
            <div className="UserInterface">
                <div className="left-sidebar">
                    <button> Change Your Details </button>
                    <button> Change Username </button>
                    <button> Change Password </button>
                </div>
                <div className="main-area">
                    <Doctor active={this.props.role==="Doctor"} />
                    <Nurse  active={this.props.role==="Nurse"}/>
                    <Patient active={this.props.role==="Patient"}/>
                    <Admin active={this.props.role==="Admin"} users={this.props.users}/>
                </div>
                <div className="right-sidebar">
                    {(this.state.isMed)
                        ? <div> You're a doc dude! how cool is that  </div>
                        : <div> damn you're sick </div>
                        }
                </div>
            </div>
        )
    }
}

export default UserInterface