import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
const Create = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        // align="center"
        color="primary"
        gutterBottom
      >
        Create Page
      </Typography>
      <Typography
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
        variant="contained"
        color="primary"
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
