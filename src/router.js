import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Example from "./routes/Example";
import EditorPage from "./routes/EditorPage";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/example" exact component={Example} />
        <Route path="/editorPage" exact component={EditorPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
