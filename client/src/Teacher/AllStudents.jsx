import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import defpp from "../img/defpp.jpg"
import Navt from "./Navt"
import St from './comp/St'
import './AllStudents.css'

const AllStudents = () => {

    const [stdata, setstData] = useState([])

    const callProfilePage = async () => {
        try {
            const resFromBack = await fetch('http://localhost:5000/students', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })

            const data = await resFromBack.json()
            setstData(data)
            console.log(data)

            if (resFromBack.status !== 200 || !data) {
                console.log("Not logged in")
                window.alert("Error")
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        callProfilePage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Navt />
            <div className="tpage">
                <div className="tleft">

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
                                        <p className="detname">Name : <span>TEACHER_NAME</span> </p>
                                        <p className="detphone">Department : <span>CE</span> </p>
                                        <p className="detwork">Subjects Taught : <span>DS, MATHS, COA</span></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tright">
                    <div className="stpgleft">
                        <a target='_blank' href="https://forms.gle/5Xn6szM4amg8c86x8" rel="noreferrer" ><button> Upload Resource</button></a>
                        {/* <a href="/attendance"><button>Take Attendance</button></a> */}
                        <Link to="/addstudent"><button>Add a student</button></Link>
                    </div>
                </div>

            </div>

            <div className="stspage" id="#stdslist">
                <h2 >Students</h2>
                <div className="stlist">
                    <div className="stcard stlabel">
                        <div className="name">Name : </div>
                        <div className="rollno">Rollno : </div>
                    </div>
                    {stdata.map((val) => {
                        return (
                            <>
                                <St
                                    name={val.name}
                                    rollno={val.rollno}
                                />
                                <hr />
                            </>

                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default AllStudents