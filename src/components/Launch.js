import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";
function Launch() {
  const { flight_number } = useParams();

  const { data, error, isLoading } = useFetch(
    `https://api.spacexdata.com/v3/launches/${flight_number}`
  );

  console.log(flight_number, data);
  const mission_stats = data?.launch_success ? "text-success" : "text-danger";

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Something Went Wrong</p>;
  } else
    return (
      <div>
        <h1 className="my-3">
          <span className={mission_stats}>{data.mission_name}</span>
        </h1>

        <div className="row ">
          <div className="col-lg-6">
            <h4 className="mb-3">Launch Details</h4>
            <ul className="list-group">
              <li className="list-group-item">
                Flight_number : {data.flight_number}{" "}
              </li>
              <li className="list-group-item">
                Launch Year : {data.launch_year}{" "}
              </li>
              <li className="list-group-item">
                Date Launched : {data.launch_date_local.substring(0, 10)}
              </li>
              <li className="list-group-item">
                Outcome :
                <span>
                  {data.launch_success
                    ? "Succesfully accomplished"
                    : "Failed task"}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="mb-3">Rocket Details</h4>
            <ul className="list-group">
              <li className="list-group-item">
                Rocket number {data.rocket.rocket_id}
              </li>
              <li className="list-group-item">
                Rocket Name : {data.rocket.rocket_name}
              </li>
              <li className="list-group-item">
                Rocket Type : {data.rocket.rocket_type}
              </li>

              <li className="list-group-item">Description : {data.details}</li>
            </ul>
          </div>
        </div>
        <br />
        <Link
          to="/"
          className="btn btn-secondary"
          style={{ marginLeft: "100px" }}
        >
          Back
        </Link>
      </div>
    );
}

export default Launch;
