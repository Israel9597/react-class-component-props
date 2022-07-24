import React, { Component } from "react";

class Links extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.url}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

export default Links;
