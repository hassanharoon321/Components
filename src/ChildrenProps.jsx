import React from "react";

const ChildrenProps = (props)=>{
    return(
        <div className="ui placeholder segment">
            {props.children}
        </div>
    );
}

export default ChildrenProps;