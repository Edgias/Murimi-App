import { useState, useReducer } from "react";
import Joi from "joi-browser";

const useForm = (schema, formData, callback) => {
  const [buttonText, setButtonText] = useState("Submit");
  const [errors, setErrors] = useState({});
  const [data, setData] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    formData
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let modelErrors = validate();
    setErrors(modelErrors || {});

    if (modelErrors) return;

    callback();
  };

  const handleButtonClick = () => {
    setButtonText("Submitting...");
  };

  const validate = () => {
    let options = { abortEarly: false };
    let { error } = Joi.validate(data, schema, options);

    if (!error) return null;

    let errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    let obj = { [name]: value };
    let propertySchema = { [name]: schema[name] };
    let { error } = Joi.validate(obj, propertySchema);

    return error ? error.details[0].message : null;
  };

  const handleChange = (e) => {
    let modelErrors = { ...errors };
    let errorMessage = validateProperty(e.target);

    if (errorMessage) modelErrors[e.target.name] = errorMessage;
    else delete modelErrors[e.target.name];

    setErrors(modelErrors);

    let { name, value } = e.target;
    setData({ [name]: value });
  };

  return {
    handleChange,
    handleSubmit,
    handleButtonClick,
    buttonText,
    validate,
    setData,
    data,
    errors,
  };
};

export default useForm;
