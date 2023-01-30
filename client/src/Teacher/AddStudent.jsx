import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './AddStudent.css'
import Navt from "./Navt"

const AddStudent = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [rollno, setRollno] = useState('');
    const [sem, setSem] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/newstudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, rollno, sem, department
                })
            });
            const data = await res.json();
            if (res.status === 200) {
                console.log(data);
                alert('Student added successfully');
                navigate("/students#stdslist")

            } else {
                console.log(data);
                alert('Error adding student');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Navt />
            <div className="addstud">

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter student's name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Rollno:</label>
                        <input type="text" placeholder="Enter student's Roll no." value={rollno} onChange={e => setRollno(e.target.value)} />
                    </div>
                    <div>
                        <label>Sem:</label>
                        <input type="text" placeholder="Enter student's Semester" value={sem} onChange={e => setSem(e.target.value)} />
                    </div>
                    <div>
                        <label>Department:</label>
                        <input type="text" placeholder="Enter student's Department" value={department} onChange={e => setDepartment(e.target.value)} />
                    </div>
                    <button class="cssbuttons-io-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                        <span>Add</span>
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddStudent