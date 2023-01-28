import React from "react";
import styles from '../styles/MessageForm.module.css';
import plusField from '../public/icons/plus-filled.svg';
import sticker from '../public/icons/sticker.svg';
import smiley from '../public/icons/smiley.svg';
import gif from '../public/icons/gif.svg';
import Image from "next/image";


const MessageForm =()=>{
    return <form className={styles.chatInputContainer}>
        <div className ={styles.chatInputWrapper}>
            <div className ={styles.svgContainer}>
                <Image
                height={25}
                width ={25}
                src ={plusField}
                className ={styles.svg}
                 />
            </div>
            <input type ='text'className= {styles.chatInput} />

            <div className ={styles.svgContainer}>
                <Image
                height={25}
                width ={25}
                src ={gif}
                className ={styles.svg}
                 />
            </div>
            <div className ={styles.svgContainer}>
                <Image
                height={25}
                width ={25}
                src ={sticker}
                className ={styles.svg}
                 />
            </div>
            <div className ={styles.svgContainer}>
                <Image
                height={25}
                width ={25}
                src ={smiley}
                className ={styles.svg}
                 />
            </div>
            
        </div>
    </form>
}

export default MessageForm;