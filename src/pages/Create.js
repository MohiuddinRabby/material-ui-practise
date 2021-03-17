import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import { makeStyles } from "@material-ui/core";
  const useStyles = makeStyles({
    btn: {
      background: "#4d88ff",
      "&:hover": {
        background: "#3377ff",
      },
    },
    paraText: {
      color: "#3377ff",
    },
  });
const Create = () => {

  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4" component="h2" color="primary" gutterBottom>
        Create Page
      </Typography>
      <Typography
        className={classes.paraText}
        variant="subtitle1"
        // align="center"
        gutterBottom
        color="textSecondary"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        recusandae tempora nobis delectus veniam natus provident. Eos
        voluptatibus animi quos quaerat laborum fugit praesentium. Culpa
        incidunt architecto corrupti eos adipisci.
      </Typography>
      <Button
        className={classes.btn}
        color="primary"
        variant="contained"
        size="small"
        startIcon={<AcUnitIcon />}
        endIcon={<AccessAlarmIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
