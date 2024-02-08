import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  //const [contacts, setContacts] = useState(dummyContacts)
  //console.log("Contacts: ", contacts)
  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}
export default App

