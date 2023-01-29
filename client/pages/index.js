import styles from '../styles/Home.module.css'
import Sidebar from '@/components/sidebar'
import ConversationList from '@/components/ConversationList'
import ChatView from '@/components/ChatView'
import { HuddleIframe} from "@huddle01/huddle01-iframe";


export default function Home() {
  
  const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/123",
    height: "650px",
    width: "80%",
    noBorder: false, // false by default
  };
  
  return (
    <div className ={styles.wrapper}>
      <Sidebar/>
      <div className={styles.main}> 
        <ConversationList/>
        <ChatView/>
      </div>

      <div className={styles.Iframe}>
        <HuddleIframe config={iframeConfig} />
      </div>
    </div>
  )
}
