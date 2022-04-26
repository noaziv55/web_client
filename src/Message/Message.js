import './Message.css';
export function Message(props) {

    const date = props.time;
    const [hour, minutes] = [date.getHours(), date.getMinutes()];
    let timeStr = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    switch (props.type) {
        case "text":
            return (
                <p className={`chat-message ${props.from === 'Me' ? "chat-sent" : ''}`}>{props.message}<span className="chat-timestamp">{timeStr}</span></p>
            )
        case "image":
            return (<div className={`chat-message ${props.from === 'Me' ? "chat-sent" : ''}`}>
                <img src={props.message} alt="" className="mediaMessage" htmlFor="input"></img>
                <span className="chat-timestamp">{timeStr}</span>
            </div>)
        case "video":
            return (<div className={`chat-message ${props.from === 'Me' ? "chat-sent" : ''}`}>
                <video src={props.message} alt="" className="mediaMessage" controls></video>
                <span className="chat-timestamp">{timeStr}</span>
            </div>)
        case "audio":
            return (<div className={`chat-message ${props.from === 'Me' ? "chat-sent" : ''}`}>
                <audio src={props.message} alt="" controls></audio>
                <span className="chat-timestamp">{timeStr}</span>
            </div>)
        default:
            return (<p>"Error"</p>)
    }
}

export default Message;