import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = ()=>{
    return(
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you want to sure to Continue?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 6:00PM" avatar={faker.image.image()} comment="Nice Blog Post!"/>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 9:00AM" avatar={faker.image.image()} comment="Good skills"/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail author="Carry" timeAgo="Today at 3:00PM" avatar={faker.image.image()} comment="InshAllah struggles give you Success"/>
            </ApprovalCard>
            
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
  