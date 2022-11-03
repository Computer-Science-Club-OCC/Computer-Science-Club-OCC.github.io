import { useState, useRef } from "react"
import {LoginService} from "../login/index"
import './login.css'

// TODO: implement magic login logic 
function Login() {

  const [email, setEmail] = useState("")
  const emailRef = useRef()

  const handleSubmit = () => {
    LoginService(email)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="login-title">Admin Login</h3>
        <form className="login-form">
            <input 
              value={email} 
              ref={emailRef} 
              onChange={(e) => setEmail(e.target.value) } 
              className="login-input" 
              placeholder="example@gmail.com" />
            <button type="submit" className="login-button" onSubmit={handleSubmit()}>Login</button>
        </form>
        <h3 className="login-text">Forgot Password ? <a className="login-link" href="#">Click here</a></h3>
      </div>
    </div>
  )
}

export default Login