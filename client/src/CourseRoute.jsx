import React from "react";
import Nav from './Nav'
import Maths from './course/Maths'
import Beld from './course/Beld'
import Ds from './course/Ds'
import Coa from './course/Coa'
import Sbl from './course/Sbl'
import Dbms from './course/Dbms'

const Course = (props) => {

    if (props.cname === "math") {

        return (
            <>
                <Nav />
                <Maths/>

            </>
        )
    }
    if (props.cname === "ds") {

        return (
            <>
                <Nav />
                <Ds/>

            </>
        )
    }
    if (props.cname === "beld") {

        return (
            <>
                <Nav />
                <Beld/>
            </>
        )
    }
    if (props.cname === "coa") {

        return (
            <>
                <Nav />
                <Coa/>
            </>
        )
    }
    if (props.cname === "dbms") {

        return (
            <>
                <Nav />
                <Dbms/>
            </>
        )
    }
    if (props.cname === "sbl") {

        return (
            <>
                <Nav />
                <Sbl/>
            </>
        )
    }
}

export default Course
