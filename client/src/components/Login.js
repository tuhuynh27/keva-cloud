import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  function handleInput(e) {
    setEmail(e.target.value)
  }

  function onLogin(e) {
    e.preventDefault()
    if (!email.trim()) {
      return
    }
    localStorage.setItem('email', email.toLowerCase())
    navigate('/main')
  }

  return (
    <React.Fragment>
      <h1>Keva Cloud</h1>
      <p>Spawn your Keva instance in seconds!</p>
      <form className="login-box" onSubmit={onLogin}>
        <input placeholder="Enter your email" value={email} onChange={handleInput}/>
        <button type="submit" onClick={onLogin}>Start</button>
      </form>
    </React.Fragment>
  )
}

export default Login
