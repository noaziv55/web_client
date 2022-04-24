
function Contacts(props) {

    let timeStr = ``;
    let lastMessage = "";

    if (props.messages.length !== 0) {
        const date = props.messages.at(-1).time;
        const [hour, minutes] = [date.getHours(), date.getMinutes()];
        timeStr = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

        switch (props.messages.at(-1).type) {
            case "text":
                lastMessage = props.messages.at(-1).message;
                break;
            case "image":
                lastMessage = "image";
                break;
            case "video":
                lastMessage = "video";
                break;
            case "audio":
                lastMessage = "audio";
                break;
            default:
                lastMessage = "";
        }
    }

    function openChatWindow() {

        props.setCurrentWindow({
            contactUsername: props.contactUsername,
            messages: props.messages,
            setContactsList: props.setContactsList,
            contactsList: props.contactsList,
            loggedInUser: props.loggedInUser
        });
    }


    return (
        <div className="sidebar-chat" onClick={openChatWindow}>
            <div className="avatar">
                <img src={props.image} alt=""></img>
            </div>
            <div className="chat-info">
                <h4>{props.nickname}</h4>
                <div>
                    {props.messages.length === 0 ? <p></p> : <p>{lastMessage}</p>}
                </div>
            </div>
            <div className="time">
                {props.messages.length === 0 ? <p></p> : <p>{timeStr}</p>}
            </div>
        </div>
    );
}
export default Contacts;

/*
import MessageContainer from '../MessageContainer/MessageContainer';
function Contacts(props) {

    function openChatWindow() {  
       // console.log(props.username);
        props.setCurrentWindow(props.username);
    }

    return (
        <div className="sidebar-chat" onClick={openChatWindow}>
            <div className="avatar">
                <img src={props.image} alt=""></img>
            </div>
            <div className="chat-info">
                <h4>{props.nickname}</h4>
                <p>Last Massage</p>
            </div>
            <div className="time">
                <p></p>
            </div>
        </div>
    );
}
export default Contacts;
*/