import React from 'react';

const UserInput = props => {
    const style = {
        textAlign: "center",
        fontSize: "20px",
        paddingTop: "5px",
        paddingBottom: "5px",
        marginTop: "5px",
        fontWeight: "bold",
        borderRadius: "3px",
        width: "200px"
    }
    return (
        <input 
        style={style}
        type="text" onChange={props.change} 
        value={props.name}/>
    )
}

export default UserInput;
