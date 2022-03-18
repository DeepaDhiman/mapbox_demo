import React from "react";
import { useNavigate } from "react-router-dom";

import trips from "../../data/trip.json";
import "./index.css";

function Index() {
  let navigate = useNavigate();

  function locateOnMap(id) {
    navigate(`/map/${id}`);
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Adress</th>
            <th>Street</th>
          </tr>

          {trips.features.map((data, index) => (
            <tr key={index}>
              <th>{data.properties.NAME}</th>
              <th>{data.properties.FACILITY}</th>
              <th>
                <a onClick={() => locateOnMap(data.properties.PARK_ID)}>
                  {data.properties.ADDRESS}
                </a>
              </th>
            </tr>
          ))}
         
        </tbody>
      </table>
    </>
  )
}

export default Index;