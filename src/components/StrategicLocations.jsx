import React from "react";
import map from "../assets/images/map.png";
import Title from "../components/Title"

export default function StrategicLocations() {
  return (
    <div className="mb-26">
      <Title title="Strategic Locations" cn="text-center mb-6" />
      
        <img src={map} className="h-full object-cover w-full"/>
    
    </div>
  );
}
