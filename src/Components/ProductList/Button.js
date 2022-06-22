import React from 'react';

function Button(props){
    console.log('Button Component executed');
    return <button onClick={props.eventHandler} className="btn btn-primary" disabled={props.disable}>{props.children}</button>
}

export default Button;