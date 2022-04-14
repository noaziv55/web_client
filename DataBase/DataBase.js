export const userDataBase= new Map();

export function addUserToData (username, nickname, password, image){
    userDataBase.set(username,{username, nickname, password, image}); 
}

export function getUser (username){
    return userDataBase.get(username);
}

export function validateUser (username, password){
    if (userDataBase.has(username)){
        return userDataBase.get(username).password === password;
    }
    return false;
}


export function isValidImageURL (str) {
    if (typeof str !== 'string'){
        return false;
    } 
    return (str.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
