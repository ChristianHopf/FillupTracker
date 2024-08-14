import React from "react";

function Header() {
  return (
    <div className="flex justify-center bg-white w-full py-8 drop-shadow-sm">
      <div className="flex container justify-between max-w-6xl">
        {/* Profile picture and username */}
        <h1 className="text-3xl">xman720</h1>
        {/* Steam game name */}
        <h1 className="text-3xl">DARK SOULS REMASTERED</h1>
      </div>
    </div>
  );
}

export default Header;
