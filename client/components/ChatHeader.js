import inbox from "../public/icons/inbox.svg";
import phone from "../public/icons/phone.svg";
import help from "../public/icons/help.svg";
import pin from "../public/icons/pin.svg";
import at from "../public/icons/at.svg";
import video from "../public/icons/video.svg";
import personPlus from "../public/icons/person-plus.svg";
import Image from "next/image";
import styles from "../styles/ChatHeader.module.css";
import ethLogo from "../public/eth.png";

const currentAccount = "0x86da4B54934Bfd877CF2f85368074096F5662fe0"

const ChatHeader = () =>{

    return (<div className={styles.chatHeader}>
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
        {currentAccount ? (
        <div className={styles.connectedWallet}>
          <Image src={ethLogo} height={20} width={15} alt='ethLogo' />
          <span className={styles.separator}>{'|'}</span>
          {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
        </div>
      ) : (
        <div className={styles.connectWallet} onClick={() => connectWallet()}>
          Connect Wallet
        </div>
      )}

<div className={styles.headerIconsContainer}>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={phone}
            className={styles.svg}
            alt=''
          />
        </div>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={video}
            className={styles.svg}
            alt=''
          />
        </div>
      </div>
      <div className={styles.headerItem}>
        <Image height={25} width={25} src={pin} className={styles.svg} alt='' />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={personPlus}
          className={styles.svg}
          alt=''
        />
      </div>
      <div className={styles.headerItem}>
        <input type='search' placeholder='Search' />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={inbox}
          className={styles.svg}
          alt=''
        />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={help}
          className={styles.svg}
          alt=''
        />
    </div>
        
</div>)
}

export default ChatHeader;