import React, { Component } from "react";
import Details2 from "./Details2";
class Grids2 extends Component {
  render() {
    return (
      <section>
        <Details2
          wrapperClass=" fifth-heghlight-wrapper"
          containerClass="container-fluid "
          rowClass="row"
          sizeClass1="left-side-wrapper col-sm-12 col-md-6"
          sideClass1="left-side-container"
          topLogo="top-logo-wrapper"
          logoWrapper="logo-wrapper "
          logoImage={TvLogo}
          tvShowWrapper="tvshow-logo-wraper"
          bankerImage={Banker}
          watchWrapper="watch-more-wrapper"
          watchTxt=" Watch now on the Apple TV App"
          sizeClass2="right-side-wrapper col-sm-12 col-md-6"
          sideClass2="right-side-container"
          logoImage2={Series}
          descWrapper="description-wraper"
          description3="With the Always-On Retina display.
							You’ve never seen a watch like this."
          linkWrapperR="links-wrapper"
          learnR=" Learn more"
          orderR="Buy"
        />
      </section>
    );
  }
}

export default Grids2;
