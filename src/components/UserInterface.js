import React from 'react'
import Doctor from './Doctor'
import Patient from './Patient'
import Nurse from './Nurse'
import Admin from './Admin'
import Receptionist from './Receptionist'

class UserInterface extends React.Component {


    render(){
        
        return(
            <div className="UserInterface">
                <div className="left-sidebar">
                    <button> Change Your Details </button>
                    <button> Change Username </button>
                    <button> Change Password </button>
                </div>
                <div className="main-area">
                    <Doctor active={this.props.role==="Doctor"} data={this.props.users.Doctors[this.props.user]} />
                    <Nurse  active={this.props.role==="Nurse"}/>
                    <Receptionist active={this.props.role==="Receptionist"} />
                    <Patient active={this.props.role==="Patient"}/>
                    <Admin active={this.props.role==="Admin"} users={this.props.users} roles={this.props.roles}/>
                </div>
            </div>
        )
    }
}

export default UserInterface