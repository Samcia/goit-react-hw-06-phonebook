import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { useState, useEffect } from 'react';
import s from '../App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = event => {
    const loweredCase = event.name.toLowerCase().trim();

    const exists = contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${event.name} is already in contacts!`);
    } else {
      setContacts([...contacts, event]);
    }
  };

  const addFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const deleteContact = id => {
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(filtered);
  };

  return (
    <section className={s.content}>
      <div className={s.content__container}>
        <ContactsForm addContact={addContact} />
        <ContactsList contacts={filteredContacts} deleteContact={deleteContact}>
          <Filter filter={filter} addFilter={addFilter} />
        </ContactsList>
      </div>
    </section>
  );
};
