import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    
      <div >
        <h1 className="home-title">Incident Reporting</h1>
        

        <div className="home-actions">
          <button className="home-button primary" onClick={() => navigate('/1')}>
            Go to /1
          </button>
        </div>
      </div>
    
  );
};

export default Home;