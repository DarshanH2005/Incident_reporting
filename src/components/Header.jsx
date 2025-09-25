import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = ({
  breadcrumb,
  title,
  onBackClick,
  onClockClick,
  showBackArrow = true,
  showClockIcon = true,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      // Default behavior: navigate to home
      navigate('/');
    }
  };

  return (
    <div className="header-section">
      {breadcrumb && (
        <div className="breadcrumb" onClick={() => handleBackClick()}>
          {breadcrumb}
        </div>
      )}

      <div className="main-header">
        {showBackArrow && (
          <div className="back-arrow" onClick={handleBackClick}>
            <ArrowBackIcon />
          </div>
        )}
  <div className="page-title">{title}</div>
        {showClockIcon && (
          <div className="clock-icon" onClick={onClockClick}>
            <AccessAlarmIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
