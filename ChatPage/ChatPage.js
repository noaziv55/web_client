import './ChatPage.css';
import Avatar1 from './Avatar5.jpeg'
import Avatar2 from './Avatar2.jpeg'
import { Component } from 'react';
import React from 'react';

export class ChatPage extends Component {
    render() {
        return (
            <div className="chat-container mx-auto" >
                <div className="chat-block">
                    <div className="sidebar">
                        <div className="header">
                            <div className="avatar">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""></img>
                            </div>
                            <div className="chat-header-right">
                                <i className="bi bi-chat-left-text-fill"></i>
                            </div>
                        </div>
                        <div className="sidebar-chats">
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noa Ziv</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noam Gini</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noa Ziv</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noa Ziv</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noa Ziv</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noa Ziv</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noa Ziv</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noa Ziv</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                            <div className="sidebar-chat">
                                <div className="avatar">
                                    <img src={Avatar1} alt=""></img>
                                </div>
                                <div className="chat-info">
                                    <h4>Noa Ziv</h4>
                                    <p>Last Massage</p>
                                </div>
                                <div className="time">
                                    <p>2:44 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-container">
                        <div className="header">
                            <div className="chat-title">
                                <div className="avatar">
                                    <img src={Avatar2} alt="" />
                                </div>
                                <div className="massage-header-content">
                                    <h4>Noam Gini</h4>
                                    <p>online</p>
                                </div>
                            </div>
                        </div>
                        <div className="message-content">
                            <p className="chat-message chat-sent">This is a message <span className="chat-timestamp">11:33 pm</span></p>
                            <p className="chat-message">This is a message <span className="chat-timestamp">11:33 pm</span></p>
                            <p className="chat-message chat-sent">This is a message <span className="chat-timestamp">11:33 pm</span></p>
                            <p className="chat-message">This is a message <span className="chat-timestamp">11:33 pm</span></p>
                            <p className="chat-message chat-sent">This is a message <span className="chat-timestamp">11:33 pm</span></p>
                            <p className="chat-message">This is a message <span className="chat-timestamp">11:33 pm</span></p>
                            <p className="chat-message chat-sent">This is a message <span className="chat-timestamp">11:33 pm</span></p>
                            <p className="chat-message">This is a message <span className="chat-timestamp">11:33 pm</span></p>
                        </div>
                        <div className="message-footer">
                            <input type="text" placeholder="Type a message"></input>
                            <i className="bi bi-mic"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatPage;