import React from "react";
import Main from "./Main";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/detail/:day">
        <Detail />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
