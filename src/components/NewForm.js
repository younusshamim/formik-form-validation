import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import { newSchema } from "../schemas";
import DatePicker from "react-datepicker";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const onSubmit = async (values, actions) => {
  console.log(values);
  // console.log(actions);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // actions.resetForm();
};

const NewForm = () => {
  const animatedComponents = makeAnimated();

  const initialValues = {
    mobile: "",
    date: new Date(),
    food: [],
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: newSchema,
    onSubmit,
  });

  const options = [
    { value: "pizza", label: "Pizza" },
    { value: "burger", label: "Burger" },
    { value: "chicken-fry", label: "Chicken Fry" },
    { value: "biriyani", label: "Biriyani" },
    { value: "khichuri", label: "Khichuri" },
  ];

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="mobile">Mobile</label>
      <input
        id="mobile"
        type="string"
        placeholder="Enter your mobile"
        value={values.mobile}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.mobile && touched.mobile ? "input-error" : ""}
      />
      {errors.mobile && touched.mobile && (
        <p className="error">{errors.mobile}</p>
      )}

      <label htmlFor="date">Date</label>
      <DatePicker
        id="date"
        selected={values.date}
        onChange={(date) => setFieldValue("date", date)}
        onBlur={handleBlur}
        className={errors.date && touched.date ? "input-error" : ""}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        filterDate={(date) => date.getDay() !== 5}
      />
      {errors.date && touched.date && <p className="error">{errors.date}</p>}

      <label htmlFor="food">Favourite Food</label>
      <Select
        id="food"
        onChange={(data) => setFieldValue("food", data)}
        closeMenuOnSelect={false}
        onBlur={handleBlur}
        components={animatedComponents}
        isMulti
        options={options}
        className={errors.date && touched.date ? "input-error" : ""}
        placeholder="Select items"
        // defaultValue={[options[0]]}
      />
      {errors.food && touched.food && <p className="error">{errors.food}</p>}

      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewForm;
