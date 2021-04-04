import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ControlPoint, SubjectOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory, useLocation } from "react-router";
const drawerWidth = 240;
const useStyle = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
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
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
