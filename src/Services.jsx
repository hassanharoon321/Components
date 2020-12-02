import React from "react";

const Services = (props)=>{
    return(
        <div className="ui message">
            <div className="header">{props.header}</div>
            <p>{props.text}</p>
        </div>
    )
}

export default Services;