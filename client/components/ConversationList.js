import react from "react";
import styles from "../styles/ConversationList.module.css"
import { useEffect,useState } from "react";
import Image from "next/image";
import nitro from '../public/icons/nitro.svg'


const ConversationList = () => {
    return (
        <div className={styles.conversations}>
            <div className={styles.conversationListTop}>
                <input type ="search" placeholder="Find or start a conversation"/>
            </div>
        </div>
    )
}

export default ConversationList;
