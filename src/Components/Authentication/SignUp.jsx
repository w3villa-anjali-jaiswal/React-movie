import React, { useState } from 'react';
import { signupUser } from '../Service/AuthUser';
import { useNavigate } from 'react-router-dom';
import "./log.css";


function SignUp() {
  const navigate =useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = await signupUser(firstName,lastName,email, password);
      localStorage.setItem('user', JSON.stringify(userData));
       localStorage.setItem('token', userData.token);
       localStorage.setItem('email', userData.email);
      navigate('/home');
      console.log("Signup successful:", userData);
    } catch (error) {
      navigate('/signup');
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='app blur'>
      <form  className='form login-form' onSubmit={handleSubmit}>
        <h3 className='text-center'>Sign Up</h3>

        <div className="mb-3">
          <label className='title'>First name</label>
          <input
            type="text"
            className=" input-container"
            placeholder="First name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>

        <div className="mb-3">
          <label className='title'>Last name</label>
          <input
            type="text"
            className=" input-container"
            placeholder="Last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>

        <div className="mb-3">
          <label className='title'>Email address</label>
          <input
            type="email"
            className=" input-container"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-3">
          <label className='title'>Password</label>
          <input
            type="password"
            className=" input-container"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="button-85">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
