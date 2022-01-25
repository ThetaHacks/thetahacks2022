import React from "react";
import "./App.css";
import { Navbar } from "./components";
import {
  Accomplishments,
  Faq,
  Footer,
  Header,
  Merch,
  Prizes,
  Schedule,
  Sponsors,
  Team,
  Volunteers,
} from "./containers";
const App = () => (
  <div className="App">
    <div className="app_bg">
      <Navbar />
      <Header />
      <Accomplishments />
      <Schedule />
      <Merch />
      <Prizes />
      <Volunteers />
      <Faq />
      <Sponsors />
      <Team />
    </div>
  </div>
);

export default App;
