import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom'
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const navigate = useNavigate()

  const isEmailValid = () => {
    return email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  }

  const isPasswordValid = () => {
    return password && password.length > 8
  }

  const onButtonClick = () => {
    if (!isEmailValid()) {
      alert('Invalid E-mail address.')
      return
    }

    if (!isPasswordValid()) {
      alert('Password must be at least 8 characters.')
      return
    }

    navigate('/home')
  }

  const onFAQClick = () => {
    navigate('help')
  }

  const onSurveyClick = () => {
    navigate('survey')
  }

  return (
    <div className='mainContainer'>
      <div className='titleContainer'>
        <div>Jarvis Automotive Services</div>
        <div className='explainContainer'>
          <p>Autonomous vehicle fleet services for the 22nd century.</p>
        </div>
      </div>
      <br />
      <div className='loginContainer'>
        <input
          placeholder="Enter your email here"
          className={isEmailValid() ? 'loginBox required' : 'loginBox error'}
          onChange={handleEmailChange}
        />
      </div>
      <br />
      <div className='loginContainer'>
        <input
          placeholder="Enter your password here"
          className={isPasswordValid() ? 'loginBox required' : 'loginBox error'}
          onChange={handlePasswordChange}
        />
      </div>
      <br />
      <div className='loginContainer'>
        <input className="loginButton submitButton" type="button" onClick={onButtonClick} value={'Log in'}/>
      </div>
      <div className='footerContainer'>
        <input className="footerButton" type="button" value="FAQ" onClick={onFAQClick} />
        <input className="footerButton" type="button" value="About Us" />
        <input className="footerButton" type="button" value="Careers" />
        <input className="footerButton" type="button" value="SWE645 Survey" onClick={onSurveyClick}/>
      </div>
    </div>
  )
}

export default Login