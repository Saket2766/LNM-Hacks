import react from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RoomAvatar from "./RoomAvatar";
import styles from "../styles/sidebar.module.css";

import avatar1 from "../public/avatar-1.webp";
import avatar2 from "../public/avatar-2.png";
import avatar3 from "../public/avatar-3.webp";
import avatar4 from "../public/avatar-4.webp";

const dummyChannnels = [
    {
        roomId: 1,
        roomName: 'Saket Samarth',
        avatar: avatar1
    },
    {
        roomId: 2,
        roomName: "Elon Musk",
        avatar: avatar2
    },
    {
        roomId: 3,
        roomName: "Sandeep Saini",
        avatar: avatar3
    },
    {
        roomId: 4,
        roomName: "Rudransh Shinghal",
        avatar: avatar4
    }
]


const Sidebar = () => {
    const router = useRouter();
    const [channels, setChannels] = useState(dummyChannnels)

    async function sidebarfix(){
        try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/getchannels`,
            )
      
            const data = await response.json();
            setChannels(data)
      
            router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`)
          } catch (error) {
            console.error(error)
          }
    }

    useEffect(() => {
        sidebarfix()
      }, [])
      
return (
    <div className={styles.wrapper}>
        {channels.map((channel, index) => (
            <RoomAvatar
                key={index}
                id={channel.roomId}
                avatar={channel.avatar}
                name={channel.roomName}
            />
        ))}
    </div>
)
}

export default Sidebar;