import React from "react";

function SteamInput() {
  function handleSubmit(e) {
    // get hours played
    // get achievements
  }
  return (
    <form className="flex flex-row gap-6 justify-center items-center mt-8 pb-4">
      <div className="flex flex-row gap-2 items-center">
        <h2 className="text-white">SteamID</h2>
        <input
          type="text"
          className="px-2 border-2 border-stone-200 rounded-sm"
        />
      </div>
      <button
        type="button"
        onClick={(e) => {
          handleSubmit(e);
        }}
        className="border-2 bg-white rounded-md px-2 py-1 hover:border-[#27668C]"
      >
        Get Stats
      </button>
    </form>
  );
}

export default SteamInput;
