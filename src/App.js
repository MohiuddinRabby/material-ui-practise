import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./context/MuiThemeProvider/theme";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
