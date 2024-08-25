import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul className={s.list}>
            {filteredData.map(({ id }) => (
                <li key={id}>
                    <Contact id={id} />
                </li>
            ))}
        </ul>
    )
}


