import React, { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import CrownIcon from "../../icons/CrownIcon";
import GearIcon from "../../icons/GearIcon";
import MenuIcon from "../../icons/MenuIcon";
import ProfileIcon from "../../icons/ProfileIcon";

const Profile: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuOpenClose = () => {
    setToggle((state) => (state = !state));
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <MenuIcon className="profile-menu-icon" onClick={handleMenuOpenClose} />
        <CrownIcon className="profile-crown-icon" />
        <GearIcon className="profile-gear-icon" />
      </div>
      <div className="profile-info">
        <div className="profile-profile-icon-container">
          <ProfileIcon className="profile-profile-icon" />
        </div>
      </div>
      <div
        className={`profile-menu-modal ${toggle ? "toggleIn" : "toggleOut"}`}
      >
        <div className="profile-menu">
          <div className="profile-close">
            <CloseIcon
              className="profile-close-icon"
              onClick={handleMenuOpenClose}
            />
          </div>
          <p>Dashboard</p>
          <p>My Feed</p>
          <p>Hot Tips</p>
        </div>
      </div>
      <div>Profile Sections</div>
    </div>
  );
};

export default Profile;
