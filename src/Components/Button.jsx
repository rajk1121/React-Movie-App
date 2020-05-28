import React from 'react';
const Button = (props) => {

    return (
        <button className="btn btn-danger" style={{ backgroundColor: "red" }} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
export default Button;
