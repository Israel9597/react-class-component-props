import React, { Component } from "react";
class Description extends Component {
  state = {};
  render() {
    const {
      wrapperClass,
      containerClass,
      alertClass,
      post,
      nameClass,
      name,
      learnWrapper,
      learn,
      order,
      ipodClass,
      colClass1,
      ipadTxt,
      colClass2,
      keyText,
      descWrapper,
      description,
      priceClass,
      price,
    } = this.props;
    return (
      <section className={wrapperClass}>
        <div className={containerClass}>
          <div className={alertClass}>{post}</div>

          <div className={nameClass}>{name}</div>
          <div className={descWrapper}>{description}</div>

          <div className={priceClass}>{price}</div>

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
          <div className={ipodClass}>
            <div className={colClass1}>{ipadTxt}</div>
            <div className={colClass2}>{keyText}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Description;
