import React from "react";

function SteamInput({ onChangeSteamId, fetchStats }) {

  return (
    <form className="flex flex-row sticky top-0 gap-6 justify-center items-center bg-black bg-opacity-70 py-4">
      <div className="flex flex-row gap-2 items-center">
        <h2 className="text-white">SteamID</h2>
        <input
          type="text"
          defaultValue={"76561198099631791"}
          onChange={(e) => {
            onChangeSteamId(e);
          }}
          className="px-2 border-2 border-stone-200 rounded-sm"
        />
      </div>
      <button
        type="button"
        onClick={fetchStats}
        className="border-2 bg-white rounded-md px-2 py-1 hover:border-[#27668C]"
      >
        Get Stats
      </button>
    </form>
  );
}

export default SteamInput;
