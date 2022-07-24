import React, { Component } from "react";
class Details extends Component {
  render() {
    const {
      wrapperClass,
      containerClass,
      rowClass,
      sizeClass1,
      sideClass1,
      nameClass1,
      name,
      learnWrapper,
      learn,
      order,
      descWrapper,
      description,
      priceClass,
      price,
      sizeClass2,
      sideClass2,
      nameClass2,
      covid,
      linkWrapper,
      watch,
    } = this.props;
    return (
      <section className={wrapperClass}>
        <div className={containerClass}>
          <div className={rowClass}>
            <div className={sizeClass1}>
              <div className={sideClass1}>
                <div className={nameClass1}>{name}</div>
                <div className={descWrapper}>{description}</div>
                <div className={priceClass}>
                  {price}
                  <sup>1</sup>
                </div>

                <div className={learnWrapper}>
                  <ul>
                    <li>
                      <a href="">{learn}</a>
                    </li>
                    <li>
                      <a href="">{order}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={sizeClass2}>
              <div className={sideClass2}>
                <div className={nameClass2}>{covid}</div>

                <div className={linkWrapper}>
                  <ul>
                    <li>
                      <a href="">{watch}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
