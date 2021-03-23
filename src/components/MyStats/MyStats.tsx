import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserStates } from "../../redux/actions/userActions";
import { RootStateType } from "../../redux/reducers/reducers";

const MyStats: React.FC = () => {
  const dispatch = useDispatch();
  const { tournamentsWon, tournamentsLost } = useSelector(
    (state: RootStateType) => ({
      tournamentsWon: state.user.states.tournaments_won,
      tournamentsLost: state.user.states.tournaments_lost
    })
  );

  useEffect(() => {
    dispatch(getUserStates());
  }, [dispatch]);

  return (
    <div>
      <h1>My States</h1>
    </div>
  );
};

export default MyStats;
