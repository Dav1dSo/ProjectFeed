import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";

export function Comment() {
    return ( 
        <div className={styles.comment}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZEwmuUASNMdxx4tE5b_LE2BFZv7YPEcxYQ&s" alt="" />           

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> User Name </strong>
                            <time title="20 de março às 8h" dateTime="2023-03-20 20:00:00"> Publicado há 1h </time>
                        </div> 
                        <button title="Deletar comentário">
                            <Trash size={24} /> 
                        </button>
                    </header> 

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>

                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer> 
                </div>
            </div>
        </div>
    )
}   