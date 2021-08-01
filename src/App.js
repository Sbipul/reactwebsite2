import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Second from "./components/SecondArea";
import Third from "./components/Third";
import Four from "./components/Four";
import TrustArea from "./components/TrustArea";
import { Team } from "./components/Team";
import Image from "./Image";
import Contact from "./components/Contact";
import Gutter from "./components/Gutter";
// import cData from "./card.json"
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <TrustArea />
      <Second />
      <Four />
      <Third />
      <Gutter />
      <Team />
      <Image />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
