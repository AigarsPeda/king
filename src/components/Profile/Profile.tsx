import React from "react";
import CrownIcon from "../../icons/CrownIcon";
import GearIcon from "../../icons/GearIcon";
import MenuIcon from "../../icons/MenuIcon";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <MenuIcon className="profile-menu-icon" />
        <CrownIcon className="profile-crown-icon" />
        <GearIcon className="profile-gear-icon" />
      </div>
      <div>Profile Sections</div>
    </div>
  );
};

export default Profile;
