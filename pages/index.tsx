import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";
import PercentageRing from "../components/PercentageRing";
import ScrollableTimeline from "../components/ScrollableTimeline";

const Home: NextPage = () => {
  return (
    <main className="pb-32">
      <Header />
      <section className="flex flex-col items-center justify-center bg-gradient-to-br from-green/10 via-blue/10 to-purple/10 pt-32">
        <div className="mt-16 flex flex-col items-center gap-y-8">
          <p className="text-gray-500">Hi, my name is</p>
          <h1 className="text-7xl font-black">Cameron Zollinger</h1>
          <p className="text-gray-500">I'm a Tech Lead at Awardco</p>
        </div>
        <div className="mt-24 flex h-64 w-2/3 justify-between">
          <PercentageRing
            text="Software"
            size={192}
            percentage={0.9}
            strokeWidth={16}
          />
          <PercentageRing
            text="Automation"
            size={192}
            percentage={0.9}
            strokeWidth={16}
          />
          <PercentageRing
            text="Data"
            size={192}
            percentage={0.7}
            strokeWidth={16}
          />
          <PercentageRing
            text="Design"
            size={192}
            percentage={0.5}
            strokeWidth={16}
          />
        </div>
      </section>
      <section className="border-tborder-t-gray-100 flex h-96 dark:border-t-gray-1100 dark:bg-black">
        nice
      </section>
    </main>
  );
};

export default Home;
