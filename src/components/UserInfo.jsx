import React from "react";
import "../styles/UserInfo.css";
// RequiredInfo import removed - not used in this component

const UserInfo = ({
  name,
  genId,
  email,
  onNameClick,
  onEmailClick,
  className = "",
}) => {
  return (
    <div className={`personal-details ${className}`}>
      <div className="user-info-row">
        <div className="user-name" onClick={onNameClick}>
          {name}
        </div>
        <div className="user-gen-id">Gen ID: {genId}</div>
      </div>
      <div className="user-email" onClick={onEmailClick}>
        {email}
      </div>
    </div>
  );
};

export default UserInfo;
