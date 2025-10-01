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
          <button className="home-button primary" onClick={() => navigate('/2')}>
            Go to /2
          </button>
          <button className="home-button primary" onClick={() => navigate('/3')}>
            Go to /3
          </button>
          <button className="home-button primary" onClick={() => navigate('/4')}>
            Go to /4
          </button>
          <button className="home-button primary" onClick={() => navigate('/5')}>
            Go to /5
          </button>
        </div>
      </div>
    
  );
};

export default Home;