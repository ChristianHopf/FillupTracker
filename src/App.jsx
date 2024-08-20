import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import SteamInput from "./components/input-form/SteamInput";
import StatsCard from "./components/stats/StatsCard";

function App() {
  // Default to fillup's steamid
  const [steamId, setSteamId] = useState("76561198099631791");
  const [userInfo, setUserInfo] = useState();
  const [hours, setHours] = useState({
    playtime_forever: 0,
    playtime_2weeks: 0,
  });
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // When the page loads, fetch playtime and achievement data
  async function fetchStats() {
    // Reset state
    setError("");
    setLoading(true);
    setUserInfo([]);
    setHours({
      playtime_forever: 0,
      playtime_2weeks: 0,
    });
    setAchievements([]);

    // Fetch data
    await fetchUserInfo();
    await fetchHours();
    await fetchAchievements();
    setLoading(false);
  }

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchUserInfo() {
    try {
      const response = await fetch(
        `https://lionfish-app-x9raw.ondigitalocean.app/users/getprofile/${steamId}`
      );
      if (!response.ok) {
        console.error(`Error: Received status ${response.status}`);
        setError(
          `Failed to fetch user's profile data: status ${response.status}`
        );
      }
      const data = await response.json();
      console.log(data);
      setUserInfo(data);
    } catch (err) {
      // setError("Error loading data");
      console.error(err);
      setError(
        "Unable to connect to the server. Please check your network connection or try again later."
      );
    }
  }

  async function fetchHours() {
    try {
      const response = await fetch(
        `https://lionfish-app-x9raw.ondigitalocean.app/users/gethours/${steamId}`
      );
      if (!response.ok) {
        if (response.status == 400) {
          setError("This user doesn't own DARK SOULS™: REMASTERED.");
        } else {
          console.error(
            `Failed to fetch playtime data: status ${response.status}`
          );
          setError(`Failed to fetch playtime data: status ${response.status}`);
        }
      }
      const data = await response.json();
      console.log(data);
      setHours(data);
    } catch (err) {
      // setError("Error loading data");
      console.error(err);
      setError(
        "Unable to connect to the server. Please check your network connection or try again later."
      );
    }
  }

  // Fetch achievement data and set to achievements state
  async function fetchAchievements() {
    try {
      const response = await fetch(
        `https://lionfish-app-x9raw.ondigitalocean.app/users/getachievements/${steamId}`
      );
      if (!response.ok) {
        if (response.status == 400) {
          setError("This user doesn't own DARK SOULS™: REMASTERED.");
        } else {
          console.error(
            `Failed to fetch achievement data: status ${response.status}`
          );
          setError(
            `Failed to fetch achievement data: status ${response.status}`
          );
        }
      }
      const data = await response.json();
      console.log(data);
      setAchievements(data);
    } catch (err) {
      // setError("Error loading data");
      console.error(err);
      setError(
        "Unable to connect to the server. Please check your network connection or try again later."
      );
    }
  }

  function handleChangeSteamId(e) {
    setSteamId(e.target.value);
  }

  let content;
  if (error != "") {
    if (userInfo.length > 0) {
      content = (
        <>
          <Header name={userInfo.personaname} imgUrl={userInfo.avatarmedium} />
          <h1 className="text-4xl text-white font-semibold max-w-2xl text-center mx-auto">
            {error}
          </h1>
        </>
      );
    } else {
      content = (
        <h1 className="text-4xl text-white font-semibold max-w-2xl text-center mx-auto">
          {error}
        </h1>
      );
    }
  } else if (loading) {
    content = (
      <>
        <h1 className="text-4xl text-white font-semibold mx-auto mt-8">
          Loading...
        </h1>
      </>
    );
  } else {
    content = (
      <>
        <section className="flex flex-col justify-center mx-auto w-full max-w-6xl">
          <Header name={userInfo.personaname} imgUrl={userInfo.avatarmedium} />
          <StatsCard hours={hours} achievements={achievements} />
        </section>
      </>
    );
  }

  return (
    <main
      className="flex min-h-screen w-full flex-col bg-fixed bg-cover"
      style={{ backgroundImage: "url(/images/bg.webp)" }}
    >
      <SteamInput
        steamId={steamId}
        onChangeSteamId={handleChangeSteamId}
        fetchStats={fetchStats}
      />
      {content}
    </main>
  );
  // return (
  //   <main className="flex min-h-screen w-full flex-col bg-white">
  //     <SteamInput />
  //     <Header />
  //     <section className="flex flex-col justify-center mx-auto w-full max-w-4xl">
  //       <StatsCard />
  //     </section>
  //   </main>
  // );
}

export default App;
