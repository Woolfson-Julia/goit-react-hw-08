import { Formik, Form, Field} from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../redux/auth/operations'
import Loader from '../Loader/Loader'
import { selectError, selectLoading } from "../../redux/auth/selectors";
import ToastInfo from "../ToastInfo/ToastInfo";



export default function RegistrationForm() {

  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className={css.label}>
            Username
            <Field type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
      {isLoading && <Loader />}
      {isError && <ToastInfo />}
    </>
  );
}
