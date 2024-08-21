import React from "react";
import Achievements from "./Achievements";
import bosses from "./bosses.json";

function StatsCard({ hours, achievements }) {
  let nextBoss = "";
  // Check each boss in order via bosses.json and find that achievement in the response data.
  // If the boss achievement is not achieved, that's the next boss
  for (const [_, boss] of bosses.entries()) {
    let current = achievements.find(
      (chieve) => chieve.name === boss.achievement.apiname
    );
    if (current === undefined) {
      nextBoss = boss.name;
      console.log(nextBoss);
      break;
    }
  }

  let achievementsContent = (
    <h2 className="text-xl text-white">
      This user hasn't completed any achievements yet.
    </h2>
  );
  if (achievements.length > 0) {
    achievementsContent = <Achievements data={achievements} />;
  }

  return (
    <div className="flex flex-col w-full max-w-6xl rounded-md mt-4 px-4 py-2 gap-8">
      <h1 className="text-5xl text-white font-semibold">
        Total hours played: {(hours.playtime_forever / 60).toFixed(1)}
      </h1>
      <h1 className="text-5xl text-white font-semibold">
        Hours played last two weeks: {(hours.playtime_2weeks / 60).toFixed(1)}
      </h1>
      <h1 className="text-5xl text-white font-semibold">
        Next boss: {nextBoss}
      </h1>
      <div className="flex flex-col mt-8">
        <h1 className="text-5xl text-white font-semibold">Achievements</h1>
        {achievementsContent}
      </div>
    </div>
  );
}

export default StatsCard;
