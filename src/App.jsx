import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function getRandomContact(existingContacts) {
  const remainingContacts = contactsJSON.filter(
    (contact) =>
      // .some is use on the exisisting contact array, to check the value is true or false. it returns boolean value.
      !existingContacts.some(
        (existingContact) => existingContact.id === contact.id
      )
  );
  return remainingContacts[
    Math.floor(Math.random() * remainingContacts.length)
  ];
}
const sortByPopularity = () => {
  // eslint-disable-next-line react
  // -hooks/rules-of-hooks, no-unused-vars
  const [popularity, setPopularity] = useState();
  // eslint-disable-next-line no-undef

  // eslint-disable-next-line no-unused-vars
  const sorted = [...contacts.popularity].sort((a, b) => a - b);
  // console.log(popularity);
  return setPopularity(sorted);
};

// const sortByPopularity = contactsJSON.popularity.sort((a, b) => a - b);

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  console.log("contacts", contacts);
  // handleClick is passed to the button as an event handler.
  const clickHandler = () => {
    if (contacts.length === contactsJSON.length) {
      return;
    }
    const randomContact = getRandomContact(contacts);
    setContacts((previousContacts) => [...previousContacts, randomContact]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div>
        <button onClick={clickHandler}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        {/* <button onClick={() => sortByName(contactsJSON.name)}>
          Sort by name
        </button> */}

        {/* <button>Sort by popularity</button> */}
        <button>Sort by name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar </th>
            <th>Won Emmy </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneContact) => {
            return (
              <>
                <tr key={oneContact.id}>
                  <td>
                    <img
                      src={oneContact.pictureUrl}
                      alt={oneContact.name}
                      style={{ height: "200px" }}
                    />
                  </td>
                  <td>
                    <h3>{oneContact.name}</h3>
                  </td>
                  <td>
                    <h3>{oneContact.popularity}</h3>
                  </td>
                  <td>
                    <h3>
                      {oneContact.wonOscar}
                      {oneContact.wonOscar && "🏆"}
                    </h3>
                  </td>
                  <td>
                    <h3>
                      {oneContact.wonEmmy}
                      {oneContact.wonEmmy && "🏆"}
                    </h3>
                  </td>
                  <td>
                    <button onClick={() => deleteContact(oneContact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
