import React from "react";
import map from "../img/map.svg";
import "./Map.css";

function Map() {
  return (
    <div>
      <img className="map-img" src={map} alt="map" />
    </div>
  );
}

export default Map;
