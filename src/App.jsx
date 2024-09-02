import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading, selectError } from "./redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {error && <p>Something went wrong, please try again.</p>}
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Wait a second...</p>}
      <ContactList />
    </div>
  );
};

export default App;
