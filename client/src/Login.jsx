import React from "react"
import { Link } from 'react-router-dom'
import './Login.css'
import logo from "./img/OBlogo-removebg-preview.png"

const Login = () => {
    return (
        <>
            <div className="containerlogin ">
                <div className="login-box">
                    <div className="user-icon">
                        <img src={logo} alt="" />

                    </div>
                    <div className="login" id="form">
                        <div className="form-group">
                            <input type="text" name="username" placeholder="Username" id="username" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="pass" placeholder="Password" id="pass" className="form-control" />
                        </div>
                        {
                            /* <div className="message" id="mess12" >
                            *Invalid username or password
                             </div> */
                        }
                        <div className="form-group">
                            <button type="submit"><Link to="/studentpage" id="logIN">Login</Link></button>
                        </div>
                    </div>
                </div>

                <footer>
                    ♾️ Designed and developed by Himanshu, Nishtha and Yashas.
                </footer>
            </div>

        </>
    )
}

export default Login