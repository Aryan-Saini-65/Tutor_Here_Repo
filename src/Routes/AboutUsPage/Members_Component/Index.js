import React, { Component } from "react";
import "./style.css";
import Data from "../Members_Component/Data";
import { urlToRequest } from "loader-utils";
// import Alex from "./Alex.png";

const s1={
    width: "234px",
    height: "234px",
    backgroundRepeat: "noRepeat",
    backgroundRepeat: "round",
}



class Members_Card extends Component {
  render() {
    return (
      <>
        <div className="maindiv1">
        <div className="tooltipdiv">
            {this.props.design} <br/> 
            {this.props.achievements}
          </div>
          <img src="../Members_Component/Alex.png"/> 
          <div className="containerdiv"> 
          <div className="name"> {this.props.name} </div>
          <div className="designation"> {this.props.designation} </div>
          <div className="email"> {this.props.email}</div> 
          </div>
        </div>
      </>
    );
  }
}
export default Members_Card;
