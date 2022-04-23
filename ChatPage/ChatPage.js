import './ChatPage.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Contacts from '../Contacts/Contacts';
import { addChat, contactsDataBase, getUserImage, getUserNickname, userChats, userDataBase } from '../DataBase/DataBase';
import { useLocation } from 'react-router-dom';
import MessageContainer from '../MessageContainer/MessageContainer';


export function ChatPage() {

    const location = useLocation();

    const [currentWindow,setCurrentWindow]=useState(null);


    const [contactsList, setContactsList] = useState([]);
    const [isAddContact, SetIsAddContact] = useState(false);
    useEffect(() => {
        if(contactsList.length===0){
            if (contactsDataBase.has(location.state.username)) {
                if (userDataBase.get(location.state.username).password === location.state.password) {

                    setContactsList(contactsDataBase.get(location.state.username).chats);
                }
            }
        }
    }, []);


    useEffect(() => {
        if(isAddContact){
        var username = document.getElementById("Username").value;
        if (userDataBase.has(username)) {
            let currentList = addChat(username, contactsDataBase.get(location.state.username).chats);
            setContactsList(currentList);
            SetIsAddContact(false);
        }
        else {
            alert("contact not found");
        }
    }
    });
    

    let [AddImg, addImg] = useState("");
    function imageHandler(e) {
        addImg(URL.createObjectURL(e.target.files[0]))

    };

    let [AddVideo, addVideo] = useState("");
    function videoHandler(e) {
        addVideo(URL.createObjectURL(e.target.files[0]))

    };

    return (
        <div className="chat-container">
            <div className="chat-block">
                <div className="sidebar">
                    <div className="header">
                        <div className="avatar">
                            <img src={location.state.image} alt=""></img>
                        </div>
                        <div className="massage-header-content">
                            <h4>{location.state.nickname}</h4>
                        </div>
                        <div className="chat-header-right">
                            <a href="#myModal" role="button" className="button" data-bs-toggle="modal">
                                <i className="bi bi-chat-left-text-fill"></i>
                            </a>
                            <div id="myModal" className="modal fade" tabIndex="-1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Add new contact</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-floating very-cool-margin">
                                                <input type="username" className="form-control" id="Username" placeholder="text" required></input>
                                                <label htmlFor="floatingInput">Username</label>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" onClick={()=>SetIsAddContact(true)}>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-chats">
                        {contactsList.map((contact, key) => <Contacts
                            nickname={getUserNickname(contact.username)}
                            image={getUserImage(contact.username)}
                            setCurrentWindow={setCurrentWindow}
                            username={contact.username}
                            key={key} />
                        )}
                    </div>
                </div>
                <MessageContainer currentWindow={currentWindow} setCurrentWindow={setCurrentWindow}/>
            </div>
        </div>
    );
}


export default ChatPage;

