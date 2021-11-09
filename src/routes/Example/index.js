import React, { Component } from "react";
import { connect } from "dva";
@connect((state) => ({
  example: state.example,
}))
export default class index extends Component {
  btn = () => {
    this.props.dispatch({
      type: "example/fetch",
      payload: "id",
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.btn}>点击</button>
      </div>
    );
  }
}
