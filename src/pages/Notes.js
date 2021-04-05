import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { deleteNotes, getNotes } from "../Api/Api";
import NoteCard from "./NoteCard";
const useStyles = makeStyles({
  cardMarginTop: {
    marginTop: "50px",
  },
});
const Notes = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes(setNotes);
  }, []);
  const deleteNote = (id) => {
    const newNotes = notes?.filter((note) => note?.id !== id);
    deleteNotes(id).then(() => setNotes(newNotes));
  };
  return (
    <Container>
      <Grid container spacing={3} className={classes.cardMarginTop}>
        {notes?.map((note) => (
          <Grid key={note?.id} item xs={12} sm={6} md={4} lg={4}>
            <NoteCard note={note} deleteNote={deleteNote} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
