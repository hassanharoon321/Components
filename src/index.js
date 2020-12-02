import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import Services from "./Services";
import ChildrenProps from "./ChildrenProps";
import One from "./One";
import Two from "./Two";
import ImageComponent from "./ImageComponent";
import Alertt from './Alertt';
import ButtonJS from "./ButtonJS";

const App = ()=>{
    return(
        <div className="ui container comments">

            {/* <ApprovalCard>
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
            </ApprovalCard> */}

            {/* <Services  header="Changes in Services" text="We just Updated our Privacy policy here to better service our customers"  />
            <Services  header="Changes in Services" text="We just Updated our Privacy policy here to better service our customers"  />
            <Services  header="Changes in Services" text="We just Updated our Privacy policy here to better service our customers"  /> */}
            
            {/* <ChildrenProps><One data="No documents are listed for customers" button="Add Documents"/></ChildrenProps>
            <ChildrenProps><Two heading="For your Information"/></ChildrenProps> */}
            
            <ImageComponent> <Alertt/> </ImageComponent>
            <ImageComponent> <ButtonJS/> </ImageComponent>
            
        
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
  