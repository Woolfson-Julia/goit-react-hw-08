import { Formik, Form, Field } from "formik";
import css from './LoginForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import Loader from "../Loader/Loader";
import { selectError, selectLoading } from "../../redux/auth/selectors";
import ToastInfo from "../ToastInfo/ToastInfo";

export default function LoginForm() {

  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
    actions.resetForm();
  }
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
      {isLoading && <Loader />}
      {isError && <ToastInfo />}
    </>
  );
}
