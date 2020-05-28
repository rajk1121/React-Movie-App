import React from 'react';
const Likes = (props) => {
    let classes = "fa fa-heart";
    if (!props.likes) {
        classes = classes + "-o";
    }
    return (<i className={classes} onClick={props.onClick}></i>)
}
export default Likes;
