import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardControls from "../../components/DashboradControls/DashboradControls";
import Profile from "../../components/Profile/Profile";
import Tournament from "../../components/Tournaments/Tournaments";
import { getAllTournaments } from "../../redux/actions/tournaments";
import { RootStateType } from "../../redux/reducers/reducers";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();

  const { tournaments } = useSelector((state: RootStateType) => ({
    tournaments: state.tournaments.tournaments
  }));

  /** Fetch all user stats only when
   * stats component are displayed * */

  /** All user games are fetch in authActions
   * when
   * log in or sign up
   * because they are needed at the start * */

  useEffect(() => {
    dispatch(getAllTournaments());
  }, [dispatch]);

  return (
    <div className="dashboard">
      {console.log("tournaments: ", tournaments)}
      <section className="dashboard-profile">
        <Profile />
      </section>
      <section className="dashboard-main">
        <DashboardControls />
        <Tournament />
      </section>
      <section className="dashboard-game-history">
        <h1>Game History</h1>
        <h2>TODO: Adding game!</h2>
        <h2>TODO: Keeping score!</h2>
        <h2>TODO: What sport do you play!</h2>
        <p>
          There shoed be possibility to chose more then one sport. End score to
          determine how winner is selected should change.
        </p>
        <h2>TODO: Edit user data!</h2>
      </section>
    </div>
  );
};

export default DashboardPage;
