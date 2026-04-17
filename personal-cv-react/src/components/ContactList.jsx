import { useEffect, useState } from "react";

function ContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost/cv-api/getContacts.php")
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(err => console.error("Error fetching contacts:", err));
    }, []);

    return (
        <section className="card">
            <h2>Saved Contacts</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
        </section>
    );
}

export default ContactList;