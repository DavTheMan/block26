//import React from "react";
import {useState} from "react";
import {useEffect} from "react";


function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContacts] = useState(null);
    useEffect(() => {
        async function fetchContact(){
            try{
                const response = await fetch(
                    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}"
                );
                const resulet = await response.json();
                setContacts(json);
            }
            catch (error){
                console.log(error);
            }
        }
        fetchContact(); 
    },[])
    if(!contact){
        return(
            <p>No Contacts</p>
        )
    }else{
        return(
            <>
            <table>
                <thead>
                    <tr>
                        <th colSpan="1">{contact.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Email:</td>
                        <th>{contact.email}</th>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <th>{contact.phone}</th>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => {selectedContactId(null)}}>Back</button>
            </>
        );
    }
    
}
export default SelectedContact;
