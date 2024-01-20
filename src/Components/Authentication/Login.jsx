import React, { useState } from 'react';
import { loginUser } from '../Service/AuthUser';
import { useNavigate } from 'react-router-dom';
import "./log.css";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    localStorage.setItem('email', event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await loginUser(email, password);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', userData.token);
      console.log("Login successful:", userData);
      navigate('/home');
    } catch (error) {
      navigate('/');
    }
  };

  return (
    <div className='app blur' >
      <form className='login-form' onSubmit={handleSubmit}>
        <h3 className='text-center'>Sign In</h3>

        <div className="mb-3 input-container">
          <label className='title'>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-3 input-container">
          <label className='title'>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="mb-3 ">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid button-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password mt-4  text-right">
          Not an account <a href="/signup">sign Up?</a>
        </p>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>


  );
}

export default Login;
