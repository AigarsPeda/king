import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserStates } from "../../redux/actions/userActions";
import { RootStateType } from "../../redux/reducers/reducers";
import { Doughnut } from "react-chartjs-2";

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
    <div className="my-stats">
      {tournamentsWon <= 0 || tournamentsLost <= 0 ? (
        <div className="my-stats-empty">
          <h3>No stats yet</h3>
        </div>
      ) : (
        <Doughnut
          data={{
            labels: ["win", "lost"],
            datasets: [
              {
                data: [tournamentsWon, tournamentsLost],
                backgroundColor: [
                  "rgb(54, 162, 235)",
                  "rgb(255, 99, 132)",
                  "rgb(255, 205, 86)"
                ]
              }
            ],
            hoverOffset: 4
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true
          }}
          width={100}
          height={75}
        />
      )}
    </div>
  );
};

export default MyStats;
