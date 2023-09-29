"use client";

import React from "react";

import Counter from "~/components/Counter";

import styles from "./page.module.css";

const Page = () => (
  <main className={styles.main}>
    <Counter
      color="orange"
      date={new Date("1/26/2013")}
      title="🎂 Friends For:"
    />
    <br />
    <Counter
      color="magenta"
      date={new Date("7/01/2015")}
      title="👩‍❤️‍👨 Lovers For:"
    />
    <br />
    <Counter
      color="red"
      date={new Date("9/29/2019")}
      title="💍 Life Partners For:"
    />
  </main>
);

export default Page;
