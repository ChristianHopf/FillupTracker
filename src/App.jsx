import { useState } from "react";
import Header from "./components/header/Header";
import SteamInput from "./components/input-form/SteamInput";
import StatsCard from "./components/stats/StatsCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main
      className="flex min-h-screen w-full flex-col bg-fixed bg-cover"
      style={{ backgroundImage: "url(/images/bg.webp)" }}
    >
      <SteamInput />
      <Header />
      <section className="flex flex-col justify-center mx-auto w-full max-w-6xl">
        <StatsCard />
      </section>
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
