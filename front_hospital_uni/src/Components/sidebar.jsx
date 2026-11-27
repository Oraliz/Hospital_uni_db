import React from "react";
import './sidebar-style.css'
import { NavLink } from "react-router-dom";

function Sidebar(){
    return(
        <div className="Sidebar">
            <ul className="SidebarList">
                <li className="row"><NavLink to="/doctores"> Doctores </NavLink></li>
                <li className="row"><NavLink to="/medicamentos"> Medicamentos </NavLink></li>
            </ul>
        </div>
    )
}
export default Sidebar;