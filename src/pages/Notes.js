import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getNotes } from "../Api/Api";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes(setNotes);
  }, []);
  return (
    <Container>
      <Grid container>
        {notes?.map((note) => (
          <Grid key={note?.id} item xs={12} sm={6} md={4} lg={4}>
            <Paper>{note?.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
