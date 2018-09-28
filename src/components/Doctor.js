import React from 'react'

class Doctor extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        console.log("---Doctor Mounted---");
        
    }
    fetchDocData(){

    }
    render(){
        console.log(this.props.data);
        let keys=Object.keys(this.props.data)
        let values=Object.values(this.props.data)
        let AttributeCount=[]
        for( var i=0;i<keys.length;i++){
            AttributeCount.push(i)
        }

        if(this.props.active)
            return(
                <div>
                    <table>
                    {AttributeCount.map((k)=>{
                        return(
                            <tr  key={k}><td>{keys[k]}</td><td> {values[k]}</td></tr>
                        )
                    })}
                    </table>
                </div>
            )
        return(
            <span></span>
        )
    }
}


export default Doctor