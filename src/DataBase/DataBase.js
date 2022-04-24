const userDataBase= new Map();

export function addingUser (username, nickname, password, image){
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
