import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Container, makeStyles, TextField } from "@material-ui/core";
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  details: Yup.string().required("Required"),
});
const useStyles = makeStyles({
  tField: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  btn: {
    marginTop: "20px",
  },
  requiredMsgColor: {
    color: "#d50000",
  },
});
const initialValues = {
  title: "",
  details: "",
};

const Create = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <Container>
        <Form>
          <div>
            <Field
              name="title"
              type="text"
              as={TextField}
              label="Title"
              color="secondary"
              variant="outlined"
              className={classes.tField}
              multiline
              fullWidth
            />
          </div>
          <div className={classes.requiredMsgColor}>
            <ErrorMessage name="title" />
          </div>
          <div>
            <Field
              name="details"
              type="text"
              as={TextField}
              label="Details"
              color="secondary"
              variant="outlined"
              className={classes.tField}
              multiline
              rows={4}
              fullWidth
            />
          </div>
          <div className={classes.requiredMsgColor}>
            <ErrorMessage name="details" />
          </div>
          <div>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="small"
              className={classes.btn}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </Formik>
  );
};

export default Create;
