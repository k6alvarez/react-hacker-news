export default function validateCreateLink(values) {
  let errors = {};

  //Email errors
  if (!values.description) {
    errors.description = "A description is required";
  } else if (values.description.length < 10) {
    errors.description = "Description must be at least 10 characters";
  }

  //Password errors
  if (!values.url) {
    errors.url = "URL is required";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "URL must be valid";
  }

  return errors;
}
