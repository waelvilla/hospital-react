import React from 'react'


class Auth extends React.Component{ 

    convert(str){
        // take a string, divide it into array of chars

        // convert each char to binary. If len<8, add zeroes to left, every char should be 8 bits

        // combine them all into one string.

        //xor string with secret 

        //return result

    }

    aut(){
        console.log('ur gd to go');
        
    }
    getDoctors(){
        let data=[]
        let req=new XMLHttpRequest()
        req.onreadystatechange= ()=>{
            if(req.readyState===XMLHttpRequest.DONE){
                data.push(req.responseText)                
                return data
            }
                
        }
        req.open("GET","https://api.jsonbin.io/b/5ba2854120f16433785be658/1",true)
        req.send()

    }
    
    render(){
        console.log(this.getDoctors());
        
        return(
            <div>Auth</div>
        )
    }
}

export default Auth