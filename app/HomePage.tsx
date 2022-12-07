"use client";

import type { NextPage } from "next";
import { Provider } from "jotai";

import Header from "components/navigation/Header";
import Main from "app/Main";

const Home: NextPage = () => {
  return (
    <Provider>
      <Header />
      <Main />
    </Provider>
  );
};

export default Home;
