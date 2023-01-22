import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
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
                navigate("/students")
                
            } else {
                console.log(data);
                alert('Error adding student');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <><Navt />
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
                <button type="submit">Submit</button>
            </form></>
    )
}

export default AddStudent