import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ul className={css.contactList}>
        <li className={css.contactListItem}>
          <p className={css.contactP}>{name}</p>
          <p className={css.contactP}>{number}</p>
          <button
            className={css.contactBtn}
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};

export default Contact;
