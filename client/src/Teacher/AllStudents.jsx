import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
            <div className="stpgleft">
                <a target='_blank' href="https://forms.gle/5Xn6szM4amg8c86x8" rel="noreferrer" ><button> Upload File</button></a>
                <a href="/attendance"><button>Take Attendance</button></a>
                <Link to="/addstudent"><button>Add a student</button></Link>
            </div>
            <div className="stspage">
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