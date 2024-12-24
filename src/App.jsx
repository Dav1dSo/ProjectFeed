import './components/global.css'  
import { Sidebar } from "./components/Sidebar/Sidebar"
import {Header} from "./components/Header/Header"
import styles from "./App.module.css"
import { Post } from './components/Post/Post'

function App() {
  return (
    <div>
      <Header/>
       <div className={styles.wrapper}>
        <Sidebar/>
        <main>
            <Post />
        </main>
       </div>
    </div>
  )
}

export default App
