"use client";

import React from "react";

import Counter from "~/components/Counter";

import styles from "./page.module.css";

const Page = () => (
  <main className={styles.main}>
    <div>Michelle, thank you for being...</div>

    <br />
    <br />
    <br />

    <Counter
      color="orange"
      date={new Date("1/26/2013")}
      title="🎂 My Friend:"
    />

    <br />
    <br />

    <Counter color="magenta" date={new Date("7/01/2015")} title="👩‍❤️‍👨 My Love:" />

    <br />
    <br />

    <Counter
      color="red"
      date={new Date("9/29/2019")}
      title="💍 My Life Partner:"
    />

    <br />
    <br />
    <br />
    <br />

    <div>I love you so much! ❤️</div>

    <br />

    <img alt="I love you" src="/jlm/signature.png" width={150} />
  </main>
);

export default Page;
