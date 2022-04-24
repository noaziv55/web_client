import { useEffect, useState } from 'react';
import useRecorder from '../AudioRecorder/AudioRecorder';
import { addNewMessage} from "../DataBase/DataBase";

export function MessageFooter(props) {

   

    const [isAddMessage, SetIsAddMessage] = useState([]);
    
    // const [messagesList, setMessagesList] = useState([]);
    
    function imageHandler (e) {
        const newMessage=([ URL.createObjectURL(e.target.files[0]), "image"]);
        let chatUpdate = addNewMessage(newMessage,props.currentChat.loggedInUser,props.currentChat.contactUsername,new Date());
        props.currentChat.setContactsList([...chatUpdate]);
     
    };

    function videoHandler(e) {
        const newMessage=([URL.createObjectURL(e.target.files[0]),"video"]);
        let chatUpdate = addNewMessage(newMessage,props.currentChat.loggedInUser,props.currentChat.contactUsername,new Date());  
        props.currentChat.setContactsList([...chatUpdate]);
    

    };

    function textHandler(e) {
        const newMessage=[document.getElementById("textMessage").value, "text"];
        let chatUpdate = addNewMessage(newMessage,props.currentChat.loggedInUser,props.currentChat.contactUsername,new Date());
        document.getElementById("textMessage").value="";
        props.currentChat.setContactsList([...chatUpdate]);
        
    }
    function onKeyDownHandler(e){
        if(e.key==="Enter"){
            textHandler(e);
        }
    }
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

    useEffect(()=>{
        if(audioURL === ""){
            return;
        }
        const newMessage=([audioURL,"audio"]);
        let chatUpdate = addNewMessage(newMessage,props.currentChat.loggedInUser,props.currentChat.contactUsername,new Date());  
        props.currentChat.setContactsList([...chatUpdate]);
    },[audioURL])

    function audioHandler(){
        if(isRecording){
            stopRecording();
        }
        else{
            startRecording();
        }
    }
    return (
        <div className="message-footer">
            <div className="btn-group dropup">
                <button type="button" className="dropbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="bi bi-paperclip"></i>
                </button>
                <div className="dropdown-menu">
                    <button type="button" className="imgWarp">
                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} ></input>
                        <label className="image-upload" htmlFor="input" >
                            <i className="bi bi-image" htmlFor="input"></i>
                        </label>
                    </button>
                    <button type="button" className="videoWarp">
                        <div className="addingVideo">
                            <input type="file" accept="video/mp4,video/x-m4v,video/*" name="video-upload" id="videoFile" onChange={videoHandler} ></input>
                        </div>
                        <label className="video-upload" htmlFor="videoFile" >
                            <i className="bi bi-camera-video" htmlFor="videoFile"></i>
                        </label>
                    </button>
                    
                </div>
            </div>
            <input type="text" onKeyDown={onKeyDownHandler} placeholder="Type a message" id="textMessage" ></input>
            <button type="button" className="sender" onClick={textHandler}>
                <i className="bi bi-send" ></i>
            </button>
                  
            <i className="bi bi-mic" onClick={audioHandler} ></i>
           
        
      
               
        </div>
    );
}

export default MessageFooter;