import React from 'react'


class Login extends React.Component {
    constructor(){
        super()
        this.state={
            username:'',
            password: '',
            role:'',

        }
        this.handleUser=this.handleUser.bind(this)
        this.handlePass=this.handlePass.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleUser(e){
        this.setState({
            username:e.target.value
        })
    }
    handlePass(e){
        this.setState({
            password: e.target.value
        })
    }
    handleRadio(role){
        this.setState({
            role
        })
    }
    handleSubmit(){
        this.props.creds(this.state.role,this.state.username)
        this.setState({
            username:'',
            password:'',
        })
    }
    render(){

        
        return (
            <div className="main-area">
                <h1> UC Hospital</h1>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                <div className="roles">
                    <label> Login Type: </label>
                    <input type="radio"  name="role" required onChange={()=>this.handleRadio('Doctor')} /> Doctor
                    <input type="radio"  name="role" onChange={()=>this.handleRadio('Nurse')} /> Nurse
                    <input type="radio"  name="role" onChange={()=>this.handleRadio('Receptionist')} /> Receptionist
                    <input type="radio"  name="role" onChange={()=>this.handleRadio('Patient')} /> Patient
                    <input type="radio"  name="role" onChange={()=>this.handleRadio('Admin')} /> Admin
                    
                    <br />
                    <div>Username: <input  type="text" value={this.state.username} onChange={this.handleUser}  /> </div>
                    <div>Password: <input  type="password" value={this.state.password} onChange={this.handlePass}  /> </div>
                </div>
                
                <button type="submit" >Login</button>
                </form>
            </div>
        )
    }
}
export default Login