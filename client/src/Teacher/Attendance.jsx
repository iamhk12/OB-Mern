import { useState, useEffect } from 'react';
import Navt from "./Navt"
import './Attendance.css'
import { useNavigate } from 'react-router-dom';

const Attendance = () => {

  const navigate = useNavigate()

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
      // const data = [{
      //   "_id": {
      //     "$oid": "63cb7e82e09d5f756f5d300f"
      //   },
      //   "name": "Himanshu Kothari",
      //   "rollno": "21CE1376",
      //   "sem": "4",
      //   "department": "Computer Engineering",
      //   "__v": 0
      // },{
      //   "_id": {
      //     "$oid": "63cce0ab54415e116f5e5d37"
      //   },
      //   "name": "Yashas Kulkarni",
      //   "rollno": "21CE1408",
      //   "sem": "4",
      //   "department": "Computer Engineering",
      //   "__v": 0
      // },{
      //   "_id": {
      //     "$oid": "63cd038830c203d1fcde9c4f"
      //   },
      //   "name": "Nishtha Raut",
      //   "rollno": "21CE1262",
      //   "sem": "4",
      //   "department": "Computer Engineering",
      //   "__v": 0
      // },{
      //   "_id": {
      //     "$oid": "63cf682adc3e42d5e22553f7"
      //   },
      //   "name": "Pranav Garse",
      //   "rollno": "21CE1408",
      //   "sem": "4",
      //   "department": "CE",
      //   "__v": 0
      // },{
      //   "_id": {
      //     "$oid": "63d0dc8536ae2c94142a91d2"
      //   },
      //   "name": "Zaid Parkar",
      //   "rollno": "21CE1068",
      //   "sem": "4",
      //   "department": "CE",
      //   "__v": 0
      // }];
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
        navigate("/teacherpage")
      } else {
        console.log(data);
        alert('Error recording attendance');
      }
    } catch (err) {
      console.log(err);
    }
  }



  const subjects = ["EM3", "DS", "DBMS", "BELD", "COA", "SBL"]

  return (
    <>
      <Navt />
      <div className="attendanceCont">
        <div className="attInner">

          <div className='OptInp'>
            <label className='optionlabel'>Subject:</label>
            <select value={subject} onChange={e => setSubject(e.target.value)}>
              <option value="">Select Subject</option>
              {subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
            </select>
          </div>
          <div className='OptInp'>
            <label className='optionlabel'>Date:</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>

          <table className="table-attendance">
            <thead>
              <tr>
                <th className="table-header">Name</th>
                {/* <th className="table-header">Roll no.</th> */}
                <th className="table-header">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {studentData
                .map((student) => (
                  <tr key={student.rollno}>
                    <td className="table-data">{student.name}</td>
                    {/* <td className="table-data">{student.rollno}</td> */}
                    <td className="table-data .attCHK">
                      <label className="switch">

                        <input
                          className="checkbox"
                          type="checkbox"
                          checked={attendanceData.find(attendance => attendance.studentId === student.name && attendance.date === date)?.attendance}
                          onChange={e => handleAttendanceChange(student.name, student.rollno, e.target.checked)}
                        />
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="btnsub">
            <button onClick={handleSubmit} className="SubmitAttBTN">Submit</button>
          </div>
        </div>
      </div>
    </>
  );

};

export default Attendance