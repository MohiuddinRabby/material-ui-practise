import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ControlPoint, SubjectOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory, useLocation } from "react-router";
const drawerWidth = 240;
const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: {
      toolbar: theme.mixins.toolbar,
    },
    appbarTitle: {
      flexGrow: 1,
    },
  };
});
const Layout = ({ children }) => {
  const classes = useStyle();
  const menuItems = [
    {
      text: "All Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <ControlPoint color="secondary" />,
      path: "/createNote",
    },
  ];
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={classes.root}>
      {/* Appbar */}
      <AppBar className={classes.appbar} elevation={1}>
        <Toolbar>
          <Typography className={classes.appbarTitle}>
            Blog Home Page
          </Typography>
          <Typography>user name</Typography>
        </Toolbar>
      </AppBar>
      {/*Side Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" align="center">
            Blog
          </Typography>
        </div>
        {/* list/links/menu-items */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
