import React from "react";

import { Header } from "./components/header";
import { About } from "./components/about";
import { Schedule } from "./components/schedule";
import { Subscription } from "./components/subscription";

export function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Schedule />
      <Subscription />
    </React.Fragment>
  );
}
