import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";
import PercentageRing from "../components/PercentageRing";
import ScrollableTimeline from "../components/ScrollableTimeline";
import PercentageRingCanvas from "../components/PercentageRingCanvas";

const Home: NextPage = () => {
  return (
    <main className="pb-32">
      <Header />
      <section className="flex flex-col items-center justify-center bg-gradient-to-r from-green/10 via-blue/10 to-purple/10 pt-32">
        <div className="mt-16 flex flex-col items-center gap-y-8">
          <p className="text-gray-500">Hi, my name is</p>
          <h1 className="text-7xl font-black">Cameron Zollinger</h1>
          {/* <svg width="768" height="72">
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#34C759" />
                <stop offset="50%" stopColor="#0A84FF" />
                <stop offset="100%" stopColor="#AF52DE" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="url(#gradient)"
              className="text-7xl font-black"
            >
              Cameron Zollinger
            </text>
          </svg> */}
          <p className="text-gray-500">I'm a Tech Lead at Awardco</p>
        </div>
        <div className="mt-24 flex h-64 w-2/3 justify-between">
          <PercentageRingCanvas id="ring1" percentage={90} text="SOFTWARE" />
          <PercentageRingCanvas id="ring2" percentage={90} text="AUTOMATION" />
          <PercentageRingCanvas id="ring3" percentage={70} text="DATA" />
          <PercentageRingCanvas id="ring4" percentage={50} text="DESIGN" />
          {/* <PercentageRing
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
          /> */}
        </div>
      </section>
      <section className="flex h-96 flex-col items-center justify-center border-t border-gray-100 dark:border-gray-1100 dark:bg-black">
        <div className="flex flex-col">
          <div className="flex gap-4">
            <div className="mt-[-4px] font-mono text-gray-600">Jun 2022</div>
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full border-2 border-white pb-3"></div>
              <div className="h-full w-0.5 bg-white"></div>
            </div>
            <div className="pb-4">
              <div className="mt-[-4px] font-bold">
                Software Engineering Technical Lead
              </div>
              <div className="text-gray-600">words</div>
              <div className="text-gray-600">words</div>
              <div className="text-gray-600">words</div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-[-4px] font-mono text-gray-600">Dec 2022</div>
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full border-2 border-white pb-3"></div>
              <div className="h-full w-0.5 bg-white"></div>
            </div>
            <div className="pb-4">
              <div className="mt-[-4px] font-bold">Software Test Engineer</div>
              <div className="text-gray-600">words</div>
              <div className="text-gray-600">words</div>
              <div className="text-gray-600">words</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
