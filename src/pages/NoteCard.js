import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const NoteCard = ({ note, deleteNote }) => {
  return (
    <Card elevation={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={()=>deleteNote(note?.id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={note?.title}
      />
      <CardMedia image="/static/images/cards/paella.jpg" title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {note?.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
