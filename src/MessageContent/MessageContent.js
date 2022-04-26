import Message from "../Message/Message";

export function MessageContent(props) {

    const messagesList = [];
    for (let i = 0; i < props.contactsList.length; i++) {
        if (props.contactsList[i].username === props.currentChat.contactUsername) {
            messagesList.push.apply(messagesList, props.contactsList[i].messages);
        }
    }

    return (
        <div className="message-content" >
            <div className="messages-wrapper">
                {messagesList.map((messageObj, key) =>
                    <Message
                        message={messageObj.message}
                        type={messageObj.type}
                        time={messageObj.time}
                        from={messageObj.from}
                        key={key} />
                )}
            </div>
        </div>
    );
}

export default MessageContent;