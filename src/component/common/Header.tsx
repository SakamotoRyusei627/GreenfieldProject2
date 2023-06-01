import React from "react";
import "./Common.css"

function Header(){
    return (
        <header className="headArea">
            <h2 className="headTitle">GPT Cooker</h2>
            <div className="setteingIcon" >
                <img className="icon" src="./system/setteing.png" alt="setteing" />
            </div>
        </header>
    )
}

export default  Header;