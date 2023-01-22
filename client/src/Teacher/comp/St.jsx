
import React from "react"

const St = (props) => {
    return (
        <>
            <div className="stcard">
                <div className="name">{props.name}</div>
                <div className="rollno">{props.rollno}</div>
            </div>
        </>
    )
}

export default St