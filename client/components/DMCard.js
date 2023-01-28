import react from "react";
import styles from "../styles/DMCard.module.css";
import Image from "next/image";

const DMCard = ({name,status,avatar,id}) => {
    const changeURL = () => {

    }

    return(
        <div className={styles.dmCard} onClick = {changeURL}>
            <div className={styles.dmAvatarContainer}>
                <Image
                    src={avatar}
                    className={styles.dmAvatar}
                    height={48}
                    width ={48}
                    alt={name}
                />
                <div className = {styles.dmCardStatus} id={status} />
            </div>

            <p className={styles.dmCardName}>{name}</p>
        </div>
    )
}

export default DMCard