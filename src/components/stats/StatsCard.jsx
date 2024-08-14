import React from "react";

function StatsCard() {
  return (
    <div className="flex flex-col bg-white w-full max-w-5xl rounded-md mt-4 px-4 py-2">
      <h1 className="text-xl">Hours played</h1>
      <div className="flex flex-col mt-4">
        <h1 className="text-xl">Achievements</h1>
      </div>
    </div>
  );
}

export default StatsCard;
