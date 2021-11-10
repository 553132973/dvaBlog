import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Example from "./routes/Example";
import EditorPage from "./routes/EditorPage";
import TechnologyInfo from "./routes/TechnologyInfo";
function RouterConfig({ history }) {
  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/example" exact component={Example} />
          <Route path="/editorPage" exact component={EditorPage} />
          <Route path="/technologyInfo" exact component={TechnologyInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
