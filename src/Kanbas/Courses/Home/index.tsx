import ModuleList from "../Modules/List";
import Status from "./status";
import "./index.css";
import React from "react";

function Home() {
    return (
        <div className="homeContainer">
            <div className="moduleList">
            <button type="button">Collapse All</button>
            <button type="button">View Progress</button>
            <select id="dropdown">
                <option value="Publish All">Publish All</option>
                <option value="Two">Second</option>
                <option value="Third">Third</option>
            </select>
            <button type="button" className="moduleButton">+Module</button>
                <ModuleList />
            </div>
            <div className="status">
                <Status />
            </div>
        </div>
    );
}
export default Home;