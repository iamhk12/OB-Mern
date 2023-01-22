const express = require("express");
const mongoose = require("mongoose")
const app = express();
const bodyParser = require('body-parser')
let port = 5000;
const db = "mongodb+srv://iamhk12:iamhk12@cluster0.ujtpsbf.mongodb.net/OB"
const router = express.Router();
const cors = require('cors')

app.use(cors())

mongoose.set("strictQuery", true)
mongoose.connect(db).then(() => { console.log("Connection successful") }).catch((err) => { if (err) console.log(err) })

app.use(bodyParser.json()) // for parsing application/json

const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    rollno: { type: String, required: true },
    sem: { type: String, required: true },
    department: { type: String }
})


const student = mongoose.model("student", studentSchema);

app.post('/newstudent', (req, res) => {

    const { name, rollno, sem, department } = req.body

    const someone = new student({
        name, rollno, sem, department
    })
    someone.save().then(() => {
        res.status(200).json({ message: "Student added successfully" })
    }).catch((err) => {
        console.log(err);
        res.status(400).json({ error: "Student not added" })
    })
})

app.get("/students", async (req, res) => {

    let studentsData = await student.find({})
    res.status(200).json(studentsData);
})

const Schema = mongoose.Schema;
const attendanceSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    attendance: {
        type: Array,
        required: true
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

app.post('/attendance', (req, res) => {
    const newAttendance = new Attendance({
        subject: req.body.subject,
        date: req.body.date,
        attendance: req.body.attendanceData
    });

    newAttendance.save()
        .then(attendance => res.json(attendance))
        .catch(err => console.log(err));
});


app.get('/attendance', async (req, res) => {
    try {
        const { date, subject } = req.query;
        const attendance = await Attendance.find({ date: date });
        res.status(200).json({ attendance });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching attendance' });
    }
});
////////////////////////////////////////////////////////////

app.listen(port, () => {
    console.log(`Listening at port : ${port}`)
})