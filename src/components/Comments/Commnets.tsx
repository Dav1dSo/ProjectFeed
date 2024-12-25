import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Comment {
    id: string;
    author: {
        name: string;
        avatarUrl: string;
    };
    content: string;
    publishedAt: string | Date;
    likes: number;
}

interface CommentProps {
    comment: Comment;
    onDeleteComment: (commentId: string) => void;
    onLikeComment: (commentId: string) => void;
}

export function Comment({ comment, onDeleteComment, onLikeComment }: CommentProps) {

    function handlerDeleteComment() {
        onDeleteComment(comment.id)
    }

    const commentDateFormatted = format(comment.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const diffTimeNow = formatDistanceToNow(comment.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handlerLikeComment() {
        onLikeComment(comment.id)
    }

    return (
        <div className={styles.comment}>
            <img src={comment.author.avatarUrl} alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> {comment.author.name} </strong>
                            <time title={commentDateFormatted} dateTime={comment.publishedAt instanceof Date ? comment.publishedAt.toISOString() : comment.publishedAt}> {diffTimeNow} </time>
                        </div>
                        <button onClick={handlerDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {comment.content}
                    </p>

                    <footer>
                        <button onClick={handlerLikeComment}>
                            <ThumbsUp />
                            Aplaudir <span>{comment.likes}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}