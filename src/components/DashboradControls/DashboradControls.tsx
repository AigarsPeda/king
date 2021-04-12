import React from "react";
import PlusIcon from "../../icons/PlusIcon";
import ShareIcon from "../../icons/ShareIcon";

const DashboardControls: React.FC = () => {
  return (
    <div className="dashboard-controls">
      <h1>Controls</h1>
      <div className="dashboard-icon">
        <PlusIcon />
      </div>
      <div className="dashboard-icon">
        <ShareIcon />
      </div>
    </div>
  );
};

export default DashboardControls;
