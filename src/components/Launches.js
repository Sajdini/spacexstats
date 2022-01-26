import React from "react";
import useFetch from "../custom-hooks/useFetch";
import { Link } from "react-router-dom";
import "../App.css";
function Launches() {
  const { data, error, isLoading } = useFetch(
    "https://api.spacexdata.com/v3/launches/?limit=30"
  );
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error) {
    return <p>Something Went Wrong</p>;
  }
  console.log(data);

  const launchesDetails = data?.map((launch) => (
    <tr key={launch.flight_number}>
      <td>
        <strong>{launch.flight_number}</strong>
      </td>
      <td>
        <strong>{launch.mission_name}</strong>
      </td>
      <td>
        <span style={{ color: launch.launch_success ? "green" : "red" }}>
          {launch.launch_success ? "Success" : "Fail"}
        </span>
      </td>
      <td>{launch.launch_date_local.substring(0, 10)}</td>

      <td>
        <Link
          to={`/launch/${launch.flight_number}`}
          className="btn btn-secondary"
        >
          Launch Details
        </Link>
      </td>
    </tr>
  ));

  return (
    <div>
      <h3 className="my-3">SpaceX Launch Records</h3>
      <table className="table table-hover">
        <thead className="thead">
          <tr
            style={{
              backgroundColor: "#dfe1e8",
              color: "teal",
              textAlign: "center",
              width: "60%",
            }}
          >
            <th scope="col">Flight Number</th>
            <th scope="col">Mision</th>
            <th scope="col">Outcome</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center", width: "60%" }}>
          {launchesDetails}
        </tbody>
      </table>
    </div>
  );
}

export default Launches;
