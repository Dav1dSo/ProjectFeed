import { PencilLine } from "phosphor-react"; 

import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://media.licdn.com/dms/image/v2/C4D16AQEL4CcCLna5yw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1645106405685?e=2147483647&v=beta&t=8C94Cl-zX8azpk4zMXmxzQYWZwcY85mL6f2dnNAQbs4"
                alt="" />

            <div className={styles.profile}>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZEwmuUASNMdxx4tE5b_LE2BFZv7YPEcxYQ&s"
                    className={styles.avatar}
                    alt="" />
                <strong>User Name</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}
