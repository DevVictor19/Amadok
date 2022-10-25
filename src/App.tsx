import React from "react";

import { Header } from "./components/header";
import { About } from "./components/about";

export function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
    </React.Fragment>
  );
}
