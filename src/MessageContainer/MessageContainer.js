//import { currentWindow, setCurrentWindow } from '..ChatPage/ChatPage'

import { getUserImage, getUserNickname } from "../DataBase/DataBase";
import MessageContent from "../MessageContent/MessageContent";
import MessageFooter from "../MessageFooter/MessageFooter";

function MessageContainer(props) {

    if (props.currentWindow === null) {
      return <img className="message-container" src="https://i.imgur.com/C7cZeFA.png" alt=""></img>
     /*
      return( <div className="message-container">
      <img src="https://i.imgur.com/C7cZeFA.png" alt="" className="cover"></img>
      </div>
      );
      */

    }

    return (
        <div className="message-container">
            <div className="header">
                <div className="chat-title">
                    <div className="avatar">
                        <img src={getUserImage(props.currentWindow.contactUsername)} alt="" />
                    </div>
                    <div className="message-header-content">
                        <h4>{getUserNickname(props.currentWindow.contactUsername)}</h4>
                    </div>
                </div>
            </div>
            <MessageContent currentChat={props.currentWindow} contactsList={props.contactsList}/>
            <MessageFooter currentChat={props.currentWindow}/>
            
        </div>
    );
}
export default MessageContainer;