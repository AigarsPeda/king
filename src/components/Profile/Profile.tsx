import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "../../icons/CloseIcon";
import CrownIcon from "../../icons/CrownIcon";
import MarkIcon from "../../icons/MarkIcon";
import MenuIcon from "../../icons/MenuIcon";
import profile from "../../images/prof.jpeg";
import { setProfileSelectedInfo } from "../../redux/actions/uiActions";
import { RootStateType } from "../../redux/reducers/reducers";
import { IProfileSelectedInfo } from "../../types";
import MyStats from "../MyStats/MyStats";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const { tournamentsWon, tournamentsLost, selectedInfo } = useSelector(
    (state: RootStateType) => ({
      tournamentsWon: state.user.states.tournaments_won,
      tournamentsLost: state.user.states.tournaments_lost,
      selectedInfo: state.ui.selectedInfo
    })
  );

  const handleMenuOpenClose = () => {
    setToggle((state) => (state = !state));
  };

  const handleSelectedInfo = (str: IProfileSelectedInfo) => {
    // saving to state users selected profile info components
    dispatch(setProfileSelectedInfo(str));

    // to close profile-menu-modal when on mobile
    setToggle(false);
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <MenuIcon className="profile-menu-icon" onClick={handleMenuOpenClose} />
      </div>
      <div className="profile-info">
        <CrownIcon className="profile-crown-icon" />
        <div className="profile-profile-images-container">
          <img src={profile} alt="profile owners" />
        </div>
        <div className="profile-stats">
          <div className="profile-won">
            <div>
              <h3>{tournamentsWon}</h3>
              <p>
                <MarkIcon className="profile-mark-icon" /> Won
              </p>
            </div>
          </div>
          <div className="profile-lost">
            <div>
              <h3>{tournamentsLost}</h3>
              <p>
                <CloseIcon className="profile-close-icon" /> Lost
              </p>
            </div>
          </div>
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
          <button
            className={selectedInfo === "dashboard" ? "selected" : ""}
            onClick={() => handleSelectedInfo("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={selectedInfo === "mystats" ? "selected" : ""}
            onClick={() => handleSelectedInfo("mystats")}
          >
            My Stats
          </button>
          <button
            className={selectedInfo === "hottips" ? "selected" : ""}
            onClick={() => handleSelectedInfo("hottips")}
          >
            Hot Tips
          </button>
        </div>
      </div>
      {selectedInfo === "dashboard" && <div>Dashboard</div>}
      {selectedInfo === "mystats" && <MyStats />}
      {selectedInfo === "hottips" && <div>Hot Tips</div>}
    </div>
  );
};

export default Profile;
