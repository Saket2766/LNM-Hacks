import react from "react";
import styles from "../styles/ConversationList.module.css"
import { useEffect,useState } from "react";
import Image from "next/image";
import nitro from '../public/icons/nitro.svg'
import friends from '../public/icons/friends.svg'
import DMCard from "../components/DMCard";

import avatar1 from "../public/avatar-1.webp";
import avatar2 from "../public/avatar-2.png";
import avatar3 from "../public/avatar-3.webp";
import avatar4 from "../public/avatar-4.webp";




const ConversationList = () => {
    const [dms,setDms] = useState([])

    useEffect(async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/getdms`,
          )
    
          const data = await response.json()
          setChannels(data)
    
          router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`)
        } catch (error) {
          console.error(error)
        }
      }, [])

    return (
        <div className={styles.conversations}>
            <div className={styles.conversationListTop}>
                <input type ="search" placeholder="Find or start a conversation"/>
            </div>

            <div className={styles.conversationsContainer}>
                <div className={styles.elementsContainer}>
                    <div className={styles.svgContainer}>
                        <Image
                            height={25}
                            width={25}
                            src = {friends}
                            className = {styles.svg}
                            alt = 'friends'
                        />
                    </div>
                    <p>
                        Friends
                    </p>
                </div>

                <div className={styles.elementsContainer}>
                    <div className={styles.svgContainer}>
                        <Image
                            height={25}
                            width={25}
                            src = {nitro}
                            className = {styles.svg}
                            alt = 'nitro'
                        />
                    </div>
                    <p>
                        Nitro
                    </p>
                </div>

                <div className={styles.dmTitle}>
                    DIRECT MESSAGES
                </div>

                {dms.map( (dm,index) => (
                    <DMCard
                        key = {index}
                        name = {dm.name}
                        id = {dm.id}
                        avatar = {
                            dm.avatar ||
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFI'
                        }
                        status = 'online'
                    />
                ))}
            </div>

            
        </div>
    )
}

export default ConversationList;
