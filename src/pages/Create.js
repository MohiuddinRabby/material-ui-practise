import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  details: Yup.string().required("Required"),
  category: Yup.string()
    .oneOf(["male", "female", "other"])
    .required("Required"),
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
  category: "",
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
            <Field as={RadioGroup} name="category">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </Field>
          </div>
          <div className={classes.requiredMsgColor}>
            <ErrorMessage name="category" />
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
