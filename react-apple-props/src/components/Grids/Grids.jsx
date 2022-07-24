import React, { Component } from "react";
import Details from "./Details";
import TvLogo from "../../commonResource/images/icons/apple-tv-logo.png";
import Banker from "../../commonResource/images/home/banker.png";
import Series from "../../commonResource/images/icons/watch-series5-logo.png";
class Grids extends Component {
  render() {
    return (
      <section>
        <Details
          wrapperClass=" fourth-heghlight-wrapper"
          containerClass="container-fluid "
          rowClass="row"
          sizeClass1="left-side-wrapper col-sm-12 col-md-6"
          sideClass1="left-side-container"
          nameClass1="title-wraper"
          name="iPhone 11 "
          descWrapper="description-wraper"
          description="Just the right amount of everything."
          priceClass="price-wrapper "
          price="From $18.70/mo. or $499 with trade‑in."
          learnWrapper="links-wrapper"
          learn=" Learn more"
          order="Apply now"
          sizeClass2="right-side-wrapper col-sm-12 col-md-6"
          sideClass2="right-side-container"
          nameClass2="title-wraper white"
          covid="Get the latest CDC response to COVID-19."
          linkWrapper="links-wrapper white"
          watch="Watch the PSA"
        />
      </section>
    );
  }
}

export default Grids;
