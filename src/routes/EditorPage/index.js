import React, { Component } from "react";
import E from "wangeditor";
import { Input, Button } from "antd";
import css from "./index.less";
export class index extends Component {
  componentDidMount() {
    const editor = new E("#editor");
    editor.config.uploadImgServer = "/upload-img";
    editor.create();
  }
  render() {
    return (
      <div>
        <div className={css.topTitle}>
          <span>标题</span>
          <Input placeholder="请输入标题" />
        </div>
        <div id="editor"></div>
        <div className={css.bottomBtn}>
          <Button type="primary">提交</Button>
        </div>
      </div>
    );
  }
}

export default index;
