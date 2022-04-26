import { useEffect, useState } from 'react';
import useRecorder from '../AudioRecorder/AudioRecorder';
import { addNewMessage } from "../DataBase/DataBase";

export function MessageFooter(props) {

    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

    function imageHandler(e) {
        const newMessage = ([URL.createObjectURL(e.target.files[0]), "image"]);
        let chatUpdate = addNewMessage(newMessage, props.currentChat.loggedInUser, props.currentChat.contactUsername, new Date());
        props.currentChat.setContactsList([...chatUpdate]);
    };

    function videoHandler(e) {
        const newMessage = ([URL.createObjectURL(e.target.files[0]), "video"]);
        let chatUpdate = addNewMessage(newMessage, props.currentChat.loggedInUser, props.currentChat.contactUsername, new Date());
        props.currentChat.setContactsList([...chatUpdate]);
    };

    function onlySpaces(str) {
        return /^\s*$/.test(str);
    }

    function textHandler(e) {
        if (onlySpaces(document.getElementById("textMessage").value)) {
            document.getElementById("textMessage").value = "";
            return;
        }
        const newMessage = [document.getElementById("textMessage").value, "text"];
        let chatUpdate = addNewMessage(newMessage, props.currentChat.loggedInUser, props.currentChat.contactUsername, new Date());
        document.getElementById("textMessage").value = "";
        props.currentChat.setContactsList([...chatUpdate]);
    }

    function onKeyDownHandler(e) {
        if (e.key === "Enter") {
            textHandler(e);
        }
    }

    useEffect(() => {
        if (audioURL === "") {
            return;
        }
        const newMessage = ([audioURL, "audio"]);
        let chatUpdate = addNewMessage(newMessage, props.currentChat.loggedInUser, props.currentChat.contactUsername, new Date());
        props.currentChat.setContactsList([...chatUpdate]);
    }, [audioURL])

    function audioHandler() {
        if (isRecording) {
            stopRecording();
        }
        else {
            startRecording();
        }
    }

    return (
        <div className="message-footer">
            <div className="btn-group dropup">
                <i className="bi bi-paperclip" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div className="dropdown-menu">
                    <div className="imgWarp">
                        <input type="file" accept="image/*" className="image-upload" id="input" onChange={imageHandler} ></input>
                        <label className="image-upload" htmlFor="input" >
                            <i className="bi bi-image" type="button" htmlFor="input"></i>
                        </label>
                    </div>
                    <div className="videoWarp">
                        <div className="addingVideo">
                            <input type="file" accept="video/mp4,video/x-m4v,video/*" className="video-upload" id="videoFile" onChange={videoHandler} ></input>
                        </div>
                        <label className="video-upload" htmlFor="videoFile" >
                            <i className="bi bi-camera-video" type="button" htmlFor="videoFile"></i>
                        </label>
                    </div>
                </div>
            </div>
            <input type="text" onKeyDown={onKeyDownHandler} placeholder="Type a message" id="textMessage" ></input>
            <i className="bi bi-mic" onClick={audioHandler} ></i>
        </div>
    );
}

export default MessageFooter;