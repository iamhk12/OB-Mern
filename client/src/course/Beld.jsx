import React from 'react';
import './Course.css'
const Beld = () => {
    return (
        <>
            <div className="cpage">
                <div className="cpfdet">
                    <h2> Details :</h2>
                    <div className='fdet'>
                        <h3>Subject : <span className='blueclr'>BELD</span></h3>
                        <h3>Teacher : <span className='blueclr'>Teacher_Name</span></h3>
                        <h3>Department : <span className='blueclr'> _Department_</span> </h3>
                    </div>
                </div>

                <div className="cpin">
                    <div className="cpleft">
                        <div className="allcontents">
                            <a href="/mathslec">Lecture PPTs</a>
                            <a href="/mathsvids">Video lectures</a>
                            <a href="/mathsnotes">Notes</a>
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

export default Beld