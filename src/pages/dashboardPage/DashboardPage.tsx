import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actions/gamesActions";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  return (
    <div>
      <h1>Stats And Game Data!</h1>
      <h2>TODO: What sport do you play!</h2>
      <p>
        There shoed be possibility to chose more then one sport. End score to
        determine how winner is selected should change.
      </p>
    </div>
  );
};

export default DashboardPage;
