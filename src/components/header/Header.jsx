import React from "react";

function Header({ name, imgUrl }) {
  console.log(imgUrl);
  return (
    <div className="flex justify-center w-full py-8">
      <div className="flex container justify-center items-center gap-8 max-w-6xl">
        {/* Profile picture and username */}
        <img src={imgUrl} alt={name + "'s profile picture"} />
        <h1 className="text-3xl text-white">{name}</h1>
      </div>
    </div>
  );
}

export default Header;
