import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user has a valid token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // If token is present, redirect to the home page
      navigate('/');
    }
  }, [navigate]); // Adding navigate to dependencies in case of future re-renders

  return <div>{children}</div>;
}

export default PublicRoute;
