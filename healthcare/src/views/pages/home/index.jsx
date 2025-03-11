import "./index.scss";
import { useState } from "react";
import React from "react";
import { Button, Row, Col, Carousel } from "antd";
import MewMobileSLide from "../../../components/slider/MewMobileSlide";
import SliderComponent from "../../../components/slider3d/index";
function Home() {
  return (
    <div className="home-container">
      <div className="home-slider">
        <div className="slider-">
          <MewMobileSLide />
        </div>
        <div className="slider-3d">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
}
export default Home;
