import React, { Component } from "react";
import E from "wangeditor";
export class index extends Component {
  componentDidMount() {
    const editor = new E("#editor");
    editor.config.uploadImgServer = "/upload-img";
    editor.create();
  }
  render() {
    return <div id="editor"></div>;
  }
}

export default index;
