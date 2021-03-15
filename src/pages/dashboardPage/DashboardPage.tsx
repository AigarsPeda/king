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
      {console.log(Date.now().valueOf() / 1000)}
      <h1>Stats And Game Data</h1>
    </div>
  );
};

export default DashboardPage;
