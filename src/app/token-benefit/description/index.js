"use client"
import { useState } from "react";
import "./styles.scss"
import Overview from "../overview";
import Benefit from "../benefits";
import Document from "../document";
// import "./../../components/css/policy.scss";
const Description = () => {
    const [selectedButton, setSelectedButton] = useState("1")
   
    return (

        <div className="descriptionBox">
            
                <button className={"btn btn-linear tabButton" + (selectedButton == 1 ? " selectedBtn" : "")} onClick={() => setSelectedButton(1)} >Overview</button>
                <button className={"btn btn-linear tabButton" + (selectedButton == 2 ? " selectedBtn" : "")} onClick={() => setSelectedButton(2)}>Benefits</button>
                <button className={"btn btn-linear tabButton" + (selectedButton == 3 ? " selectedBtn" : "")} onClick={() => setSelectedButton(3)}>Project documents</button>
            
            <div className="row">
                {selectedButton=="1" && <Overview/>}
                {selectedButton=="2" && <Benefit/>}
                {selectedButton=="3" && <Document/>}
            </div>
        </div>


    );
};

export default Description;