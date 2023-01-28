import inbox from "../public/icons/inbox.svg";
import phone from "../public/icons/phone.svg";
import help from "../public/icons/help.svg";
import pin from "../public/icons/pin.svg";
import at from "../public/icons/at.svg";
import Image from "next/image";
import styles from "../styles/ChatHeader.module.css";
// import ethLogo from "../public/ethLogo.png";
const ChatHeader = () =>{
    <div className={styles.chatHeader}>
        <div className ={styles.roomNameContainer}>
            <Image
                heigth = {20}
                width = {20}
                src = {at}
                className = {styles.svg}
                alt = "at"
            />
            <h3 className={styles.title}>Room Name</h3>
            <div className={styles.chatHeaderStatus} id='online' />
        </div>
        <div className= {styles.connectWallet} onClick ={()=>connectWallet()}>
            Connect Wallet
        </div>
        
    </div>
}

export default ChatHeader;