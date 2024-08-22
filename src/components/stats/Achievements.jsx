import React from "react";
import AchievementItem from "./AchievementItem";

function Achievements({ achievementsList }) {
  return (
    <div className="flex flex-col gap-8 mt-8">
      {achievementsList.map((achievement) => (
        <AchievementItem
          key={achievement.unlocktime}
          displayName={achievement.name}
          description={achievement.description}
          unlocktime={achievement.unlocktime}
          icon={achievement.icon}
        />
      ))}
    </div>
  );
}

export default Achievements;
