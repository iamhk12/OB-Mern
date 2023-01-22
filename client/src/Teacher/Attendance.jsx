import { useState, useEffect } from 'react';
import Navt from "./Navt"
import './Attendance.css'

const Attendance = () => {
  const [studentData, setStudentData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [subject, setSubject] = useState("");
  const today = new Date();
  const defaultDate = `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
  const [date, setDate] = useState(defaultDate);

  useEffect(() => {
    callProfilePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callProfilePage = async () => {
    try {
      const resFromBack = await fetch("http://localhost:5000/students", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      const data = await resFromBack.json();
      setStudentData(data);

      if (resFromBack.status !== 200 || !data) {
        console.log("Not logged in");
        window.alert("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAttendanceChange = (name, rollno, attendance) => {
    const studentIndex = attendanceData.findIndex(
      student => student.studentId === rollno
    );
    if (studentIndex === -1) {
      setAttendanceData([...attendanceData, { studentId: rollno, studentName: name, attendance }]);
    } else {
      const newAttendanceData = [...attendanceData];
      newAttendanceData[studentIndex] = { studentId: rollno, studentName: name, attendance };
      setAttendanceData(newAttendanceData);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject: subject,
          date: date,
          attendanceData: attendanceData
        })
      });
      const data = await res.json();
      if (res.status === 200) {
        console.log(data);
        alert('Attendance recorded successfully');
      } else {
        console.log(data);
        alert('Error recording attendance');
      }
    } catch (err) {
      console.log(err);
    }
  }



  const subjects = ["Mths", "hindi", "marathi"]

  return (
    <><Navt />
      <div>
        <label className='optionlabel'>Subject:</label>
        <select value={subject} onChange={e => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          {subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
        </select>
      </div>
      <div>
        <label className='optionlabel'>Date:</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      
      <table className="table-attendance">
    <thead>
      <tr>
        <th className="table-header">Name</th>
        <th className="table-header">Attendance</th>
      </tr>
    </thead>
    <tbody>
      {studentData
        .map((student) => (
          <tr key={student.rollno}>
            <td className="table-data">{student.name}</td>
            <td className="table-data">
              <input
                className="checkbox"
                type="checkbox"
                checked={attendanceData.find(attendance => attendance.studentId === student.name && attendance.date === date)?.attendance}
                onChange={e => handleAttendanceChange(student.name, student.rollno, e.target.checked)}
              />
            </td>
          </tr>
        ))}
    </tbody>
  </table>
      <button onClick={handleSubmit}>Submit Attendance</button>
    </>
  );

};

export default Attendance