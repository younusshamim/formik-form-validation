import React from "react";
import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...props}
          {...field}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <p htmlFor={field.name}>I accept the term of service</p>
      </div>

      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};

export default CustomCheckbox;
