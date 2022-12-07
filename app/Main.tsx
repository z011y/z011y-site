"use client";

import PercentageRingCanvas from "components/visualization/percentageRing/PercentageRingCanvas";
import SimpleTimeline from "components/visualization/SimpleTimeline";

export default function Main() {
  return (
    <main className="pb-32">
      <section className="flex flex-col items-center justify-center bg-gradient-to-tr from-green/20 via-white to-purple/30 pt-32 dark:via-black dark:to-purple/20">
        <div className="mt-16 flex flex-col items-center gap-y-8">
          <p>Hi, my name is</p>
          <h1>Cameron Zollinger</h1>
          <p>I'm a Tech Lead at Awardco</p>
        </div>
        <div className="mt-24 flex h-64 w-2/3 justify-between">
          <PercentageRingCanvas id="ring1" percentage={90} text="SOFTWARE" />
          <PercentageRingCanvas id="ring2" percentage={90} text="AUTOMATION" />
          <PercentageRingCanvas id="ring3" percentage={70} text="DATA" />
          <PercentageRingCanvas id="ring4" percentage={50} text="DESIGN" />
        </div>
        <div className="h-px w-full bg-gradient-to-r from-green/30 to-purple/30"></div>
      </section>
      <section className="flex h-96 flex-col items-center justify-center bg-white dark:bg-black">
        <SimpleTimeline />
      </section>
    </main>
  );
}
