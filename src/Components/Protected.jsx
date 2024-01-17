import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Protected({ component: Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('email');
    console.log("Token:", token);
    console.log("User Email:", userEmail);
    const check = Boolean(token) || Boolean(userEmail);

    if (!check) {
      navigate('/login'); 
    }
  }, [navigate]); 

  return <div> <Component /> </div>
}

export default Protected;
