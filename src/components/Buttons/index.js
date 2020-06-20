import React from "react";
import "./style.css";

function Buttons (props) {
  return (
  <div>
    <div className="row">
        <div className="col"><button className="card-btn" onClick={props.handleBtnClick} style={{visibility: "hidden"}}>Image</button></div>
        <div className="col"><button className="card-btn" onClick={props.handleBtnClick}>Name</button></div>
        <div className="col"><button className="card-btn" onClick={props.handleBtnClick}>Phone</button></div>
        <div className="col"><button className="card-btn" onClick={props.handleBtnClick}>Email</button></div>
        <div className="col"><button className="card-btn" onClick={props.handleBtnClick}>DOB</button></div>
    </div>
  </div>
  );
}

export default Buttons;
