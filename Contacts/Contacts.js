
import MessageContainer from '../MessageContainer/MessageContainer';
function Contacts(props) {

    function openChatWindow() {
        console.log(props.nickname);
        <MessageContainer props={props} />
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