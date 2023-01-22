import React from "react";
import { Link } from 'react-router-dom'
import './Student.css'
import Nav from './Nav'
import defpp from "./img/defpp.jpg"



// style="font-size:12px; height:20px; width:20px; color: white;"
const Student = () => {
    return (
        <>
            <Nav />
            <div className="screen">

                <div className="studpage">

                    <div className="stleft">

                        {/* 
                    Name
                    Roll no
                    Semester
                    Department
                    Div
                    Attendance
                     */ }

                        {/* <div className="profile">
                            <div className="pp"></div>
                            <div className="stdet"></div>
                        </div> */}
                        <div className="mypro">
                            <div className="inmypro">
                                <div className="mpleft">
                                    <img src={defpp} alt="Profile" />
                                </div>
                                <div className="myproright">
                                    <form action="">
                                        <div className="det">
                                            {/* <p className="detuserid">User Id : <span>{userData._id}</span> </p> */}
                                            <p className="detname">Name : <span>Himanshu Kothari</span> </p>
                                            <p className="detemail">Roll no : <span>21CE1376</span> </p>
                                            <p className="detphone">Semester : <span>III</span> </p>
                                            <p className="detphone">Department : <span>CE</span> </p>
                                            <p className="detwork">Attendance : <span>78%</span></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stright">
                        <div className="allcourses">
                        
                            <h3>MY COURSES</h3>

                            <Link to="/coursemath">Engineering Mathematics - III</Link>
                            <Link to="/courseds">Data Structures </Link>
                            <Link to="/coursebeld">Basic Logic and Electronic Devices</Link>
                            <Link to="/coursecoa">Computer Organization and Architecture</Link>
                            <Link to="/coursedbms">Database Management System</Link>
                            <Link to="/coursesbl">Skill Based lab - Java</Link>

                        </div>

                    </div>

                </div>


                <footer>
                    ♾️ Designed and developed by Himanshu, Nishtha and Yashas.
                </footer>

            </div >
        </>
    )
}

export default Student

/* <div className="box">
                
                    <div id="upc" className="Dash">
                        <h2>Upcoming</h2>
                        <p>
                            ALL THE BEST FOR FINALS !!
                        </p>
                    </div>

                    <div id="ann" className="Dash">
                        <h2>Announcements</h2>

                        <ol>
                            <li>The ENDSEM for SEM-III CE students starts <br /> 22.11.2022 to 02.12.2022</li>
                            <li>CE-SE Mini Projectwill be conducted from next week. </li>
                            <li>CE-FE MSE Exams begins from 05.12.2022</li>
                            <li>NAAC committees visited the university. </li>
                        </ol>

                    </div>

                    <div id="dbt" className="Dash">
                        <a href="https://forms.gle/1dUiQYK1m3BfJtQ47" rel="noreferrer" target="_blank">>Ask a Doubt</a>
                    </div>

                </div>
                <div className="container">
                    <h1 id="chead">MY COURSES</h1>
                </div>

                <div className="allcourses">
                    <ul>
                        <ol>
                           <a href="courses/math/coursemath.html">>Engineering Mathematics -
                                III
                            </a></li>
                           <a href="courses/ds/courseds.html">>Data Structures </a></li>
                           <a href="courses/beld/coursebeld.html">>Basic Logic and Electronic
                                Devices</a>
                            </li>
                           <a href="courses/coa/coursecoa.html">>Computer Organization and
                                Architecture</a>
                            </li>
                           <a href="courses/dbms/coursedbms.html">>Database Management
                                System</a></li>
                           <a href="courses/sbl/coursesbl.html">>Skill Based lab - Java</a>
                            </li>
                        </ol>
                    </ul>

                </div> */