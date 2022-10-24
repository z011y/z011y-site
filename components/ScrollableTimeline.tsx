import { useRef } from "react";
import {
  TrophyIcon,
  FlagIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

interface Event {
  title: string;
  date: Date;
}

interface Period {
  startDate: Date;
  endDate: Date;
}

interface Props {
  events: Event[];
}

export default function ScrollableTimeline({ events }: Props) {
  const period = getPeriod(events);
  const monthsInPeriod = getMonthsInPeriod(period);

  function getPeriod(events: Event[]): Period {
    let startDate = new Date();
    let endDate = new Date();

    events.forEach((event: Event) => {
      if (event.date < startDate) {
        startDate = event.date;
      }

      if (event.date > endDate) {
        endDate = event.date;
      }
    });

    return {
      startDate,
      endDate,
    };
  }

  function getMonthsInPeriod(period: Period): Date[] {
    const { startDate, endDate } = period;
    const months = [startDate];

    const addMonth = (date: Date): void => {
      const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
      months.push(newDate);

      if (newDate < endDate) {
        addMonth(newDate);
      }
    };

    addMonth(startDate);
    return months;
  }

  function renderTimeline() {
    let timelineElement: JSX.Element[] = [];
    monthsInPeriod.forEach((month) => {
      events.forEach((event) => {
        if (
          event.date.getMonth() === month.getMonth() &&
          event.date.getFullYear() === month.getFullYear()
        ) {
          timelineElement.push(
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 flex justify-center items-center border-4 border-blue rounded-full relative">
                <h2 className="absolute left-[-72px] text-center text-gray-600 font-mono text-xs whitespace-nowrap">
                  {month.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </h2>
                <h2 className="absolute left-8 top-[-4px] text-center dark:text-white font-bold text-md whitespace-nowrap">
                  {event.title}
                </h2>
              </div>
              <div className="h-12 w-0.5 bg-gray-600"></div>
            </div>
          );

          return;
        }
      });
      // if last month in array don't render line
      if (monthsInPeriod[monthsInPeriod.length - 1] === month) {
        timelineElement.push(
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 border-2 border-gray-600 rounded-full relative">
              <h2 className="absolute left-[-65px] text-center text-gray-600 font-mono text-xs whitespace-nowrap">
                Current
              </h2>
            </div>
          </div>
        );

        return;
      }

      timelineElement.push(
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 border-2 border-gray-600 rounded-full relative">
            <h2 className="absolute left-[-72px] text-center text-gray-600 font-mono text-xs whitespace-nowrap">
              {month.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </h2>
          </div>
          <div className="h-12 w-0.5 bg-gray-600"></div>
        </div>
      );
    });

    return timelineElement;
  }

  return (
    <div className="grid grid-cols-2 h-[512px] bg-gray-100 dark:bg-gray-1100 relative mx-12 rounded-2xl overflow-hidden">
      <div className="absolute z-10 top-0 w-1/2 h-24 bg-gradient-to-t from-gray-100/0 to-gray-100/100 dark:from-gray-1100/0 dark:to-gray-1100/100"></div>
      <div className="absolute z-10 bottom-0 w-1/2 h-24 bg-gradient-to-b from-gray-100/0 to-gray-100/100 dark:from-gray-1100/0 dark:to-gray-1100/100"></div>
      <ArrowUpCircleIcon className="absolute left-24 top-48 w-8 h-8 stroke-gray-600 hover:stroke-blue" />
      <ArrowDownCircleIcon className="absolute left-24 bottom-48 w-8 h-8 stroke-gray-600 hover:stroke-blue" />
      <div className="flex flex-col items-center w-full h-full py-[256px] overflow-y-scroll">
        {renderTimeline()}
      </div>
      <div className="w-full h-full py-4 pr-24">
        <h2 className="text-3xl font-bold mb-2">Awardco</h2>
        <h3 className="font-mono uppercase tracking-widest">
          software test engineer
        </h3>
        <ul className="text-gray-600">
          <li>
            Designed and developed an automated test framework from the ground
            up with Cypress
          </li>
          <li>
            Created and maintained automated test scripts for end to end,
            integration, security, performance, and component tests
          </li>
          <li>
            Implemented and maintained a GitHub Action to integrate Cypress
            tests into the CI pipeline
          </li>
          <li>
            Performed UX design reviews on prototypes created for
            cross-functional agile teams
          </li>
          <li>
            Wrote and executed complete test cases for new features developed on
            cross-functional agile teams
          </li>
          <li>
            Created new or modified existing end to end tests based on test
            cases written for new features
          </li>
        </ul>
      </div>
    </div>
  );
}
