import { useState } from "react";
import Header from "./components/header/Header";
import SteamInput from "./components/input-form/SteamInput";
import StatsCard from "./components/stats/StatsCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen w-full flex-col bg-stone-200">
      <Header />
      <section className="flex flex-col justify-center mx-auto w-full max-w-4xl">
        <SteamInput />
        <StatsCard />
      </section>
    </main>
  );
}

export default App;
