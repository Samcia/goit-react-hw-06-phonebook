import PropTypes from 'prop-types';

import s from './ContactsList.module.css';

export const ContactsList = ({ contacts, children, deleteContact }) => {
  return (
    <div className={s.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul className={s.contacts__list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.contacts__item} key={id}>
            <p className={s.contacts__name}>{name}</p>
            <p className={s.contacts__number}> {number}</p>
            <button
              onClick={() => {
                deleteContact(id);
              }}
              className={s.contacts__btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
