import styles from "../styles/ChatView.module.css";
import ChatHeader from "./ChatHeader";
import MessageForm from "./MessageForm";

const ChatView = () => {
    return(
        <div className={styles.chatView}>
            <ChatHeader/>
            <div className={styles.messagesContainer}>
                <MessageForm />
            </div>
        </div>
    )
}

export default ChatView;