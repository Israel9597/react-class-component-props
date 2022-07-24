import React, { Component } from "react";
import Description from "./Description";
class Main extends Component {
  render() {
    return (
      <section>
        <Description
          wrapperClass=" first-hightlight-wrapper"
          containerClass="container "
          alertClass="new-alert"
          post="New"
          nameClass="title-wraper bold black "
          name="iPad Pro "
          learnWrapper="links-wrapper"
          learn=" Learn"
          order="Order"
          ipodClass="ipod-caption row"
          colClass1="col-sm-12 col-md-6 text-md-right"
          ipadTxt="iPad Pro available starting 3.25"
          colClass2="col-sm-12 col-md-6 text-md-left"
          keyText="Magic Keyboard coming in May"
        />
        <Description
          wrapperClass=" second-hightlight-wrapper"
          containerClass="container "
          alertClass="new-alert"
          post="New"
          nameClass="title-wraper bold black "
          name="MacBook Air"
          descWrapper="description-wrapper black"
          description="Twice the speed. Twice the storage"
          priceClass="price-wrapper grey"
          price="From $999"
          learnWrapper="links-wrapper"
          learn=" Learn"
          order="Order"
        />
        <Description
          wrapperClass=" third-hightlight-wrapper"
          containerClass="container "
          nameClass="title-wraper bold  "
          name="iPhone 11 Pro"
          descWrapper="description-wrapper "
          description="Pro cameras. Pro display. Pro performance."
          priceClass="price-wrapper "
          price="From $24.95/mo. or $599 with trade‑in."
          learnWrapper="links-wrapper"
          learn=" Learn"
          order="Order"
        />
      </section>
    );
  }
}

export default Main;
