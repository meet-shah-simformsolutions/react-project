import React from 'react'

const User = (props) =>
{   
    let age_check = props.age ? props.age : "NA";
    if(props.children){
                <hr></hr>
        return (<div>Name: <b>{props.children}</b> | Age: {age_check}<hr/></div>)
    }else{
        return "Invalid data"
    }
}

export default User;