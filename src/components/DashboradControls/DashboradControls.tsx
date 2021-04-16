import React from "react";
import PlusIcon from "../../icons/PlusIcon";
import ShareIcon from "../../icons/ShareIcon";

const DashboardControls: React.FC = () => {
  return (
    <div className="dashboard-controls">
      <button className="plus">
        New Game <PlusIcon />
      </button>
      <button className="share">
        Share <ShareIcon />
      </button>
    </div>
  );
};

export default DashboardControls;
