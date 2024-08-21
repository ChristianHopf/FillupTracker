import React from "react";

function AchievementItem({ displayName, description, unlocktime, icon }) {
  return (
    <div className="flex flex-row max-w-md bg-black rounded-md bg-opacity-70">
      <img className="px-6 py-6" src={icon} alt={displayName} />
      <div className="flex flex-col mt-2">
        <h1 className="text-xl text-white font-semibold">{displayName}</h1>
        <h2 className="text-white mb-4">{description}</h2>
        <h2 className="text-stone-400">
          Achieved: {new Date(unlocktime * 1000).toDateString()}
        </h2>
      </div>
    </div>
  );
}

export default AchievementItem;
