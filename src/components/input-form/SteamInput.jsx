import React from "react";

function SteamInput() {
  return (
    <form className="flex flex-row gap-6 justify-center items-center mt-8">
      <div className="flex flex-row gap-2">
        <h2 className="text-xl">User</h2>
        <input type="text" className="px-2" />
      </div>
      <div className="flex flex-row gap-2">
        <h2 className="text-xl">Game</h2>
        <input type="text" className="px-2" />
      </div>
      <button type="submit" className="border-2 bg-white rounded-md px-4 py-2">
        Get Stats
      </button>
    </form>
  );
}

export default SteamInput;
