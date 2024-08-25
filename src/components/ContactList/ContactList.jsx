import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {

    const contacts = useSelector(selectFilteredContacts);
    const filter = useSelector(selectNameFilter);
    const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul className={s.list}>
            {filteredData.length ? (filteredData.map(({ id }) => (
                <li key={id}>
                    <Contact id={id} />
                </li>
            ))) : <h2 className={s.error}>No data received...</h2>}
        </ul>
    )
}


