import { BrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import {
  About,
  Contact,
  Hero,
  Navbar,
  StarsCanvas,
} from "./components";

const Tech = React.lazy(() => import("./components/Tech"));
const Experience = React.lazy(() => import("./components/Experience"));
const Works = React.lazy(() => import("./components/Works"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Suspense fallback={<div>Loading...</div>}>

        <Experience />
        <Tech />
        <Works />
        </Suspense>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
