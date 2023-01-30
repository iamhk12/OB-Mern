import React from 'react';
import './Course.css'
const Maths = () => {
    return (
        <>
            <div className="cpage">
                <div className="cpfdet">
                    <h2> Details :</h2>
                    <div className='fdet'>
                        <h3>Subject : <span className='blueclr'>Maths</span></h3>
                        <h3>Teacher : <span className='blueclr'>Teacher_Name</span></h3>
                        <h3>Department : <span className='blueclr'> _Department_</span> </h3>
                    </div>
                </div>

                <div className="cpin">
                    <div className="cpleft">
                        <div className="allcontents">
                            <a href="/em3/lecppt">Lecture PPTs</a>
                            <a href="/em3/vidlec">Video lectures</a>
                            <a href="/em3/notes">Notes</a>
                        </div>
                    </div>
                    <div className="cpright">
                        <div className="rightin">
                                <div className="ann">
                                    <h3>Announcements</h3>
                                    <div className="annin">
                                        <hr />
                                        <hr />
                                        <hr />
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                </div>

                                <button className='inbtn blueclr'>
                                    ASK A DOUBT
                                </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maths