import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getNotes } from "../Api/Api";
import NoteCard from "./NoteCard";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes(setNotes);
  }, []);
  return (
    <Container>
      <Grid container spacing={3}>
        {notes?.map((note) => (
          <Grid key={note?.id} item xs={12} sm={6} md={4} lg={4}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
