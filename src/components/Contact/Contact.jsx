import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import ToastInfo from "../ToastInfo/ToastInfo";


export default function Contact({ data: { id, name, number } }) {
  
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(deleteContact(id));
  }

  return (
    <div className={css.container}>
      <div className={css.user}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
      <ToastInfo/>
    </div>
  );
}
