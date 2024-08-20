import React from "react";
import mockResponse from "../../mock/getplayerachievements_response.json";
import AchievementItem from "./AchievementItem";

function Achievements({ data }) {
  return (
    <div className="flex flex-col gap-8 mt-8">
      {data.map((achievement) => (
        <AchievementItem
          key={achievement.unlocktime}
          displayName={achievement.displayName}
          description={achievement.description}
          unlocktime={achievement.unlocktime}
          icon={achievement.icon}
        />
      ))}
    </div>
  );
}

export default Achievements;
