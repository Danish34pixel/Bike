import React from "react";
import { useParams } from "react-router-dom";
import Chat from "./Chat";

// Dummy data for bikes
const bikes = [
  { id: 1, name: "Classic 350" },
  { id: 2, name: "Himalyan" },
  { id: 3, name: "Meteor 350" },
];

const BikeDetail = () => {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === Number(id));
  if (!bike) return <div>Bike not found</div>;
  return (
    <div>
      {/* Remove the top image and white space, only render the chat section or your custom detail UI below */}
      <Chat bikeId={bike.id} />
    </div>
  );
};

export default BikeDetail;
