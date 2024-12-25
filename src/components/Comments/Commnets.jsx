import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Comment({comment}) {

    const commentDateFormatted = format(comment.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const diffTimeNow = formatDistanceToNow(comment.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    return ( 
        <div className={styles.comment}>
            <img src={comment.author.avatarUrl} alt="" />           

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> {comment.author.name} </strong>
                            <time title={commentDateFormatted} dateTime={comment.publishedAt}> {diffTimeNow} </time>
                        </div> 
                        <button title="Deletar comentário">
                            <Trash size={24} /> 
                        </button>
                    </header> 

                    <p>
                        {comment.content}
                    </p>

                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>{comment.likes}</span>
                        </button>
                    </footer> 
                </div>
            </div>
        </div>
    )
}   