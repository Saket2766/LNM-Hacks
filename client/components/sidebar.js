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
        id:1,
        roomId:20,
        name:'general',
        avatar: avatar1
    },
    {
        id:2,
        roomId:25,
        name:"Elon Musk",
        avatar: avatar2
    },
    {
        id:3,
        roomId:30,
        name:"Sandeep Saini",
        avatar: avatar3
    },
    {
        id:4,
        roomId:35,
        name:"Rudransh Shinghal",
        avatar: avatar4
    }
]


const Sidebar = () => {
    const router = useRouter();
    const [channels,setChannels] = useState(dummyChannnels)
    return( 
    <div className={styles.wrapper}> 
        {channels.map((channel,index)=>(
            <RoomAvatar
                key ={index}
                id ={channel.roomId}
                avatar ={channel.avatar}
                name ={channel.roomName}
            />
        ))} 
    </div>
    )
} 

export default Sidebar;