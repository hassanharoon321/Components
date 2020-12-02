import React from "react";

const One = (props)=>{
    return (
            <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                <h4>{props.data}</h4>
                <button className="ui primary button">{props.button}</button>
            </div>
    );
}

export default One;