import React from "react";
import styles from '../styles/MessageForm.module.css';
import plusFilled from '../public/icons/plus-filled.svg';
import { useContext } from "react";
import { DiscordContext } from "@/context/context";
import sticker from '../public/icons/sticker.svg';
import smiley from '../public/icons/smiley.svg';
import gif from '../public/icons/gif.svg';
import gift from '../public/icons/smiley.svg';
import Image from "next/image";




const MessageForm = () => {
  const {
    messageText,
    setMessageText,
    placeholder,
    gun,
    roomName,
    currentAccount,
    currentUser,
  } = useContext(DiscordContext)

  const sendMessage = event => {
    event.preventDefault()
    if (messageText.trim() === '') return

    const messagesRef = gun.get(roomName)

    const newMessage = {
      sender: currentUser.name,
      avatar: currentUser.avatar
        ? currentUser.avatar
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU',
      content: messageText.trim(),
      createdAt: Date().substring(4, 11),
      messageId: Date.now(),
    }

    messagesRef.set(newMessage)
    setMessageText('')
  }

  return (
    <form
      onSubmit={event => sendMessage(event)}
      className={styles.chatInputContainer}
    >
      <div className={styles.chatInputWrapper}>
        <div className={styles.svgContainer}>
          <Image
            height={25}
            width={25}
            src={plusFilled}
            className={styles.svg}
          />
        </div>
        <input
          type='text'
          className={styles.chatInput}
          value={messageText}
          disabled={currentAccount.name}
          onChange={e => setMessageText(e.target.value)}
          placeholder={placeholder}
        />

        <div className={styles.svgContainer}>
          <Image height={25} width={25} src={gift} className={styles.svg} />
        </div>
        <div className={styles.svgContainer}>
          <Image height={25} width={25} src={gif} className={styles.svg} />
        </div>
        <div className={styles.svgContainer}>
          <Image height={25} width={25} src={sticker} className={styles.svg} />
        </div>
        <div className={styles.svgContainer}>
          <Image height={25} width={25} src={smiley} className={styles.svg} />
        </div>
      </div>
    </form>
  )
}

export default MessageForm