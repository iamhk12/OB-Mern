import { useState, useEffect } from 'react';
// import Navt from "./Navt"

const AttendanceReport = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchAttendance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject, date]);

  const fetchAttendance = async () => {
    try {
      const res = await fetch(`http://localhost:5000/attendance?subject=${subject}&date=${date}`);
      const data = await res.json();
      setAttendanceData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAttendance();
  };

  const subjects = ["Mths", "hindi", "marathi"];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject:</label>
          <select value={subject} onChange={e => setSubject(e.target.value)}>
            <option value="">Select Subject</option>
            {subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <button type="submit">Fetch Attendance</button>
      </form>
      {attendanceData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rollno</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance) => (
              <tr key={attendance._id}>
                <td>{attendance.name}</td>
                <td>{attendance.rollno}</td>
                <td>{attendance.attendance ? 'Present' : 'Absent'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default AttendanceReport;
