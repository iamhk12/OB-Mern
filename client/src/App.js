import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Login'
import Student from './Student'
import Resources from './Resources'
import CourseRoute from './CourseRoute'
import AllStudents from './Teacher/AllStudents'
import Attendance from './Teacher/Attendance'
import AttendanceReport from './Teacher/AttendanceReport'
import AddStudent from './Teacher/AddStudent'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Student />} />
        <Route path='/lg' element={<Login />} />
        <Route path='/studentpage' element={<Student />} />
        <Route path='/coursemath' element={<CourseRoute cname="math" />} />
        <Route path='/courseds' element={<CourseRoute cname="ds" />} />
        <Route path='/coursebeld' element={<CourseRoute cname="beld" />} />
        <Route path='/coursecoa' element={<CourseRoute cname="coa" />} />
        <Route path='/coursedbms' element={<CourseRoute cname="dbms" />} />
        <Route path='/coursesbl' element={<CourseRoute cname="sbl" />} />
        <Route path='/teacherpage' element={<AllStudents />} />
        <Route path='/students' element={<AllStudents />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/attendancereport' element={<AttendanceReport />} />
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/em3/notes' element={<Resources subject="em3" type="notes" />} />
        <Route path='/em3/lecppt' element={<Resources subject="em3" type="lecppt" />} />
        <Route path='/em3/vidlec' element={<Resources subject="em3" type="vidlec" />} />
        <Route path='/ds/notes' element={<Resources subject="ds" type="notes" />} />
        <Route path='/ds/lecppt' element={<Resources subject="ds" type="lecppt" />} />
        <Route path='/ds/vidlec' element={<Resources subject="ds" type="vidlec" />} />
        <Route path='/beld/notes' element={<Resources subject="beld" type="notes" />} />
        <Route path='/beld/lecppt' element={<Resources subject="beld" type="lecppt" />} />
        <Route path='/beld/vidlec' element={<Resources subject="beld" type="vidlec" />} />
        <Route path='/dbms/notes' element={<Resources subject="dbms" type="notes" />} />
        <Route path='/dbms/lecppt' element={<Resources subject="dbms" type="lecppt" />} />
        <Route path='/dbms/vidlec' element={<Resources subject="dbms" type="vidlec" />} />
      </Routes>
    </>
  );
}

export default App;
