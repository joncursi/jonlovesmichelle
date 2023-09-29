"use client";

import React from "react";
import FlipNumbers from "react-flip-numbers";
import Image from "next/image";

import { timeDiff } from "~/helpers/timeDiff";

import styles from "./page.module.css";

const getTimeDiffData = () => timeDiff(new Date("9/29/2019"), new Date());

export default function Home() {
  const [timeDiffData, setTimeDiffData] = React.useState(getTimeDiffData());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeDiffData(getTimeDiffData());
    }, 1000);

    return (): void => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.counterOuterContainer}>
        {[
          {
            label: "Years",
            value: timeDiffData.years,
          },
          {
            label: "Months",
            value: timeDiffData.months,
          },
          {
            label: "Days",
            value: timeDiffData.days,
          },
          {
            label: "Hours",
            value: timeDiffData.hours,
          },
          {
            label: "Minutes",
            value: timeDiffData.minutes,
          },
          {
            label: "Seconds",
            value: timeDiffData.seconds,
          },
        ].map((data, i) => {
          return (
            <div className={styles.counterInnerContainer} key={data.label}>
              <FlipNumbers
                background="red"
                color="white"
                height={50}
                numbers={Math.abs(data.value).toString().padStart(2, "0")}
                numberStyle={{
                  fontSize: "85%",
                }}
                perspective={400}
                play
                width={20}
              />
              <span className={styles.counterLabel}>{data.label}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
