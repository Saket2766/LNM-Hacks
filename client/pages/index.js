import styles from '../styles/Home.module.css'
import Sidebar from '@/components/sidebar'
import ConversationList from '@/components/ConversationList'


export default function Home() {
  return (
    <div className ={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}> 
        <ConversationList/>
      </div>
    </div>
  )
}
