import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Protected({ component: Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('email');
   
    const check = Boolean(token);

    if (!check) {
      navigate('/login'); 
    }
  }, [navigate]); 

  return <div> <Component /> </div>
}

export default Protected;
