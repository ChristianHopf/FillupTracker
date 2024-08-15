import React from "react";
import mockGetOwnedGames from "../../mock/getownedgames_response.json";

function StatsCard() {
  return (
    <div className="flex flex-col w-full max-w-6xl rounded-md mt-4 px-4 py-2 gap-8">
      <h1 className="text-5xl text-white font-semibold">
        Total hours played:{" "}
        {mockGetOwnedGames.response.games[0].playtime_forever / 60}
      </h1>
      <h1 className="text-5xl text-white font-semibold">
        Hours played last 2 weeks:{" "}
        {mockGetOwnedGames.response.games[0].playtime_forever / 60}
      </h1>
      <div className="flex flex-col mt-4">
        <h1 className="text-5xl text-white">Achievements</h1>
      </div>
    </div>
  );
}

export default StatsCard;
