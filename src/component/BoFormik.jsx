import { Formik, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: ""
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("You must enter a name")
});

export default function BoFormik() {
  const existingNames = ["name1", "name2"];

  return (
    <div className="App">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(formikProps) => (
          <>
            <label>Name</label>
            <Field
              error={formikProps.errors.name}
              fullWidth
              helperText={
                formikProps.touched.name ? formikProps.errors.name : ""
              }
              name={"name"}
              onChange={formikProps.handleChange}
              onBlur={(e) => {
                if (
                  existingNames.includes(e.target.value) &&
                  formikProps.values.nameref !== e.target.value
                ) {
                  formikProps.setFieldError(
                    "name",
                    "Another template already has this name"
                  );
                }
                formikProps.handleBlur(e);
              }}
              value={formikProps.values.name}
            />
          </>
        )}
      </Formik>
    </div>
  );
}
