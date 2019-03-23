import React from 'react';

const UserOutput = props => {
    return (
        <div>
            <p>Hi, I am {props.name}!</p>
            <p>{props.para}</p>
        </div>
    )
}

export default UserOutput;