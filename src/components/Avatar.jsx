import React from 'react';
import "../styles/Avatar.css";
import AvatarMkSvg from "../assets/avatar-mk.svg";
import AvatarPhotoDefault from "../assets/Vector.jpg";

const Avatar = ({ initials = 'MK', photo = null, size = 48, isOnline = true, onClick, className = '' }) => {
  return (
    <div className={`avatar-frame ${className}`} style={{ width: size, height: size }} onClick={onClick}>
      <div className="avatar-image">
        {photo ? (
          <img src={photo} alt={initials || 'Avatar'} className="avatar-img" />
        ) : AvatarPhotoDefault ? (
          <img src={AvatarPhotoDefault} alt={initials || 'Avatar'} className="avatar-img" />
        ) : AvatarMkSvg ? (
          <img src={AvatarMkSvg} alt={initials || 'Avatar'} className="avatar-img" />
        ) : (
          <div className="avatar-placeholder"><span>{initials}</span></div>
        )}
      </div>
      {isOnline && <div className="avatar-online-indicator"></div>}
    </div>
  );
};

export default Avatar;
