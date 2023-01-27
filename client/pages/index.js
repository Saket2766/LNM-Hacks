import styles from '../styles/Home.module.css'
import Sidebar from '@/components/sidebar'


export default function Home() {
  return (
    <div className ={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}> 
        Conversations List Chat View
      </div>
    </div>
  )
}
