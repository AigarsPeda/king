import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../components/Profile/Profile";
import { RootStateType } from "../../redux/reducers/reducers";

const DashboardPage: React.FC = () => {
  // const dispatch = useDispatch();

  const { games } = useSelector((state: RootStateType) => ({
    games: state.games.games
  }));

  /** Fetch all user stats only when
   * stats component are displayed * */

  /** All user games are fetch in authActions
   * when
   * log in or sign up
   * because they are needed at the start * */

  // useEffect(() => {
  //   dispatch(getAllGames());
  // }, [dispatch]);

  return (
    <div className="dashboard">
      {console.log(games)}
      <section className="dashboard-profile">
        <Profile />
      </section>
      <section className="dashboard-main">
        <h2>TODO: Add second password input!</h2>
        <p>Make sure the passwords are the same</p>
        <h2>TODO: Loading state for login and sing up!</h2>
        <p>Add loading display on button</p>
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
