import React from "react";
import mockData from "../../mock/getplayersummaries_response.json";

function Header() {
  return (
    <div className="flex justify-center w-full py-8">
      <div className="flex container justify-center items-center gap-8 max-w-6xl">
        {/* Profile picture and username */}
        <img src={mockData.response.players[0].avatarmedium} alt="" />
        <h1 className="text-3xl text-white">
          {mockData.response.players[0].personaname}
        </h1>
      </div>
    </div>
  );
}

export default Header;
