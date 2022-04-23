//import { currentWindow, setCurrentWindow } from '..ChatPage/ChatPage'
function MessageContainer(props) {

    if (props.currentWindow === "https://i.imgur.com/C7cZeFA.png") {
        return <img className="message-container" src="https://i.imgur.com/C7cZeFA.png" alt=""></img>
    }
    
    let changedWindow=props.currentWindow;
    props.setCurrentWindow(props.image);

    if (props.currentWindow !== changedWindow){

        return (
            <div className="message-container">
                <div className="header">
                    <div className="chat-title">
                        <div className="avatar">
                            <img src={props.image} alt="" />
                        </div>
                        <div className="massage-header-content">
                            <h4>{props.nickname}</h4>
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
                    <div className="btn-group dropup">
                        <button type="button" className="dropbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-paperclip"></i>
                        </button>
                        <div className="dropdown-menu">
                            <button type="button" className="imgWarp">
                                <input type="file" accept="image/*" name="image-upload" id="input"  ></input>
                                <label className="image-upload" htmlFor="input" >
                                    <i className="bi bi-image" htmlFor="input"></i>
                                </label>
                            </button>
                            <button type="button" className="videoWarp">
                                <div className="addingVideo">
                                    <input type="file" accept="video/mp4,video/x-m4v,video/*" name="video-upload" id="videoFile"  ></input>
                                </div>
                                <label className="video-upload" htmlFor="videoFile" >
                                    <i className="bi bi-camera-video" htmlFor="videoFile"></i>
                                </label>
                            </button>
                        </div>
                    </div>
                    <input type="text" placeholder="Type a message"></input>
                    <button type="button" className="sender">
                        <i className="bi bi-send"></i>
                    </button>
                    <i className="bi bi-mic"></i>
                </div>
            </div>
        );
    }
}
export default MessageContainer;