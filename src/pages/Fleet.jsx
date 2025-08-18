import React from "react";
import "../styles.css";

const fleetData = [
  {
    name: "Force Urbania",
    img: "/images/force-urbania.jpg",
    description: "Spacious, comfortable, and ideal for long journeys with family or groups.",
  },
  {
    name: "Tempo Traveller",
    img: "/images/tempo-traveller.jpeg",
    description: "Perfect for medium-sized groups, offering great comfort and space.",
  },
  {
    name: "Sedan Car",
    img: "/images/sedan.jpeg",
    description: "Smooth rides for small groups or personal travel.",
  },
  {
    name: "SUV",
    img: "/images/suv.jpeg",
    description: "Powerful and comfortable for hilly terrains and adventurous trips.",
  },
];

export default function Fleet() {
  return (
    <div className="page fleet-page">
      <h1 className="page-title">Our Fleet</h1>
      <p className="page-intro">
        Vinayaka Tour & Travels offers a range of vehicles to make your journey safe,
        comfortable, and memorable.
      </p>
      <div className="fleet-grid">
        {fleetData.map((vehicle, index) => (
          <div key={index} className="fleet-card">
            <img src={vehicle.img} alt={vehicle.name} className="card-img" />
            <div className="card-content">
              <h3>{vehicle.name}</h3>
              <p>{vehicle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
