import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from '../../redux/contacts/operations.js';
import css from "./ContactForm.module.css"
import ToastInfo from "../ToastInfo/ToastInfo.jsx";

export default function ContactForm() {
  
  const dispatch = useDispatch();
  const fieldId = nanoid();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  
  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <label className={css.text} htmlFor={`${fieldId}-name`}>
              Name
            </label>
            <Field type="text" name="name" id={`${fieldId}-name`}></Field>
          </div>
          <div className={css.container}>
            <label className={css.text} htmlFor={`${fieldId}-number`}>
              Number
            </label>
            <Field type="tel" name="number" id={`${fieldId}-number`}></Field>
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <ToastInfo />
    </>
  );
}
