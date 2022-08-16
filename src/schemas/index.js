import * as yup from "yup";

const mobileNoRules = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// -- Basic page schema
export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password not match!")
    .required("Required"),
});

// -- Advance page schema
export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),

  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),

  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});

// -- New form schema
export const newSchema = yup.object().shape({
  mobile: yup
    .string()
    .matches(mobileNoRules, { message: "Number invalid" })
    .required("Required"),

  date: yup.date().required("Required"),
  food: yup.array().min(3, "Minimum select 3 item").required("Required"),
});
