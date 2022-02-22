import "./App.css";
import contacts from "./contacts.json"
import { useState } from "react";
// import ContactsRow from "./components/ContactsRow";

const firstFiveContacts = contacts.slice(0, 5)

const randomIndex = Math.floor(Math.random() * ((contacts.length - 1) - 5) + 5)


function App() {

  const [contactList, setContactList] = useState(firstFiveContacts)

  const addRandomContact = index => {
    console.log(setContactList)
    const arr = [...contactList]
    arr.push(contacts[index])

    setContactList(arr)

  }

  return <div className="App">
    <h1>IronContacts</h1>
    < button onClick={() => addRandomContact(randomIndex)}> Add Random Contact</button >
    <table>
      <thead>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </thead>
      <tbody>
        {
          contactList.map((elm, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={elm.pictureUrl} alt={`${elm.name}'s photo`} />
                </td>
                <td>
                  <p>{elm.name}</p>
                </td>
                <td>
                  <p>{elm.popularity.toFixed(2)}</p>
                </td>
                <td>
                  {elm.wonOscar ? <span>🏆</span> : null}
                </td>
                <td>
                  {elm.wonEmmy ? <span>🏆</span> : null}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>;
}
export default App;
