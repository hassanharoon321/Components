import React from 'react'
import "./App.css"

const ImageComponent = (props) => (
    <div className="round">
        {props.children}
    </div>

)

export default ImageComponent;