import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
// import Login from './Login'
import Student from './Student'
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
        <Route path='/studentpage' element={<Student />} />
        <Route path='/coursemath' element={<CourseRoute cname="math" />} />
        <Route path='/courseds' element={<CourseRoute cname="ds" />} />
        <Route path='/coursebeld' element={<CourseRoute cname="beld" />} />
        <Route path='/coursecoa' element={<CourseRoute cname="coa" />} />
        <Route path='/coursedbms' element={<CourseRoute cname="dbms" />} />
        <Route path='/coursesbl' element={<CourseRoute cname="sbl" />} />
        <Route path='/teacherpage' element={<AllStudents  />} />
        <Route path='/students' element={<AllStudents  />} />
        <Route path='/attendance' element={<Attendance  />} />
        <Route path='/attendancereport' element={<AttendanceReport  />} />
        <Route path='/addstudent' element={<AddStudent  />} />

      </Routes>
    </>
  );
}

export default App;
