import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./context/MuiThemeProvider/theme";
import Create from "./pages/Create";
import Layout from "./pages/Layout";
import Notes from "./pages/Notes";
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route path="/createNote">
                <Create />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
