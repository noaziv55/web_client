import Avatar1 from './Avatar1.jpeg'
import Avatar2 from './Avatar2.jpeg'
import Avatar3 from './Avatar3.jpeg'
import Avatar4 from './Avatar4.jpeg'
import Avatar5 from './Avatar5.jpeg'

export const userDataBase = new Map([["Noa", { username: "Noa", nickname: "Noa", password: "12345678", image: Avatar1 }],
["Noam", { username: "Noam", nickname: "Noam", password: "12345678", image: Avatar2 }],
["Mor", { username: "Mor", nickname: "Mor", password: "12345678", image: Avatar3 }],
["Dani", { username: "Dani", nickname: "Dani", password: "12345678", image: Avatar4 }],
["Yossi", { username: "Yossi", nickname: "Yossi", password: "12345678", image: Avatar5 }]]);

/* 
export const yossiChats = new Map([[{username:"Mor"}, { messages: [{ message: "hello", type: "text", from: "Mor", time: "11:33 pm" }]  }],
[{username: "Noam"}, { messages: [{ message: "hello", type: "text", from: "Noam", time:"9:30 am" }] } ] ]);
export const morChats = new Map([[ "Yossi", { messages: [{ message: "hello", type: "text", from: "Mor", time:"11:33 pm" }] } ]]);
export const noaChats = new Map([[ "Noam", { messages: [{ message: "hello", type: "text", from: "Noa", time:"9:30 am" }] } ]]);
export const noamChats = new Map([[ "Noa", { messages: [{ message: "hello", type: "text", from: "Noa", time:"9:30 am" }] } ]]);
export const userChats = new Map();
 */

//changed only yossi and userChats to an array to check if it is working
export const yossiChats = [{ username: "Mor", messages: [{ message: "hello", type: "text", from: "Mor", time: new Date() }] },
{ username: "Noam", messages: [{ message: "hi", type: "text", from: "Noam", time: new Date() }] }];
// export const morChats = new Map([[ "Yossi", { messages: [{ message: "hello", type: "text", from: "Mor", time:"11:33 pm" }] } ]]);
// export const noaChats = new Map([[ "Noam", { messages: [{ message: "hello", type: "text", from: "Noa", time:"9:30 am" }] } ]]);
// export const noamChats = new Map([[ "Noa", { messages: [{ message: "hello", type: "text", from: "Noa", time:"9:30 am" }] } ]]);
export const userChats = [];

export const contactsDataBase = new Map([["Yossi", { username1: "Yossi", chats: yossiChats }]]);

/* export const contactsDataBase = new Map([[ "Mor", { username1: "Mor", chats: morChats } ], 
[ "Yossi", { username1: "Yossi", chats: yossiChats } ],
[ "Noam", { username1: "Noam", chats: noamChats } ], [ "Noa", { username1: "Noa", chats: noaChats } ]]); */

export function addToContactsDataBase(username) {
    let userChats = [];
    contactsDataBase.set(username, { username1: username, chats: userChats });
}

export function getUserNickname(username) {
    return userDataBase.get(username).nickname;
}

export function getUserImage(username) {
    return userDataBase.get(username).image;
}

/*need to check if working*/
export function addNewMessage(newMessage, loggedInUser, contactUsername, messageTime) {
    let messageToSend = { message: newMessage[0], type: newMessage[1], from: "Me", time: messageTime }
    let currentChats = contactsDataBase.get(loggedInUser).chats;

    for (let i = 0; i < currentChats.length; i++) {
        if (currentChats[i].username === contactUsername) {
            contactsDataBase.get(loggedInUser).chats[i].messages.push(messageToSend);
            return contactsDataBase.get(loggedInUser).chats;
        }
    }
}

/*added funtion that creates a chat between two users*/
export function addChat(username2, currentChats) {
    if (currentChats !== undefined) {
        for (let i = 0; i < currentChats.length; i++) {
            if (currentChats[i].username === username2) {
                alert("you already have a chat with this contact");
                return currentChats;

            }
        }
    }

    currentChats.push({ username: username2, messages: [] });
    return currentChats;
}

export function addUserToData(username, nickname, password, image) {
    userDataBase.set(username, { username, nickname, password, image });
}

export function getUser(username) {
    return userDataBase.get(username);
}

export function validateUser(username, password) {
    if (userDataBase.has(username)) {
        return userDataBase.get(username).password === password;
    }
    return false;
}



