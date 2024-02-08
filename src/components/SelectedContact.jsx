import React from "react";
import {useState} from "react";
import {useEffect} from "react";


export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContacts] = useState([]);
    useEffect(() => {
        async function fetchContact(){
            try{
                const response = await fetch(
                    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                );
                const resulet = await response.json();
    
            }
            catch (error){
                console.log(error);
            }
        }
        fetchContact(); 
    },[])
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
    )
}
