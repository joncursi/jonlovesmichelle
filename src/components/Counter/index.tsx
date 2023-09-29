import React from "react";
import FlipNumbers from "react-flip-numbers";

import { timeDiff } from "~/helpers/timeDiff";

import styles from "./index.module.css";

interface Props {
  color: string;
  date: Date;
  title: string;
}

const Counter = ({ color, date, title }: Props) => {
  const getTimeDiffData = () => timeDiff(date, new Date());

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
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.flipOuterContainer}>
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
            <div className={styles.flipInnerContainer} key={data.label}>
              <FlipNumbers
                background={color}
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
              <span className={styles.flipLabel}>{data.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
