import React from "react";
import { NavLink } from "react-router-dom";
import "./Navt.css"
const Navt = ()=>{
    return(
        <>
            
            <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <div className="nav-title">
                            BIBLIOTEK
                        </div>
                    </div>

                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <NavLink to="/teacherpage">Students</NavLink>
                        <NavLink to="/attendance">Take Attendance</NavLink>
                        <NavLink to="/contactus.html">Contact Us</NavLink>
                        <a href="https://forms.gle/bDdT1qV7kQ89Yxcz7" rel="noreferrer" target="_blank">Feedback</a>
                        <NavLink to="/">Log out</NavLink>
                    </div>
                </div>
        </>
    )
}

export default Navt