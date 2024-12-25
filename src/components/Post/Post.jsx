import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comments/Commnets'
import styles from './Post.module.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export function Post({ author, publishedAt, content, comments }) {

    const commentsData = [...comments]
    const [commentsList, setCommentsList] = useState(commentsData)  

    const [contentComment, setContentComment] = useState('')
    const [likesComment, setLikesComment] = useState(0)
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const DateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handlerDeleteComment(contnetId) {
        console.log(`deletar comentário! ${contnetId}`);

        const CommentsAfterDelete = commentsList.filter(comment => comment.id !== contnetId)
        setCommentsList(CommentsAfterDelete)
    }

    function handlerFormSubmit(event) {  
        event.preventDefault()
 
        const newComment = {
            id: nanoid(),
            author: {   
                name: author.name,   
                avatarUrl: author.avatarUrl   
            },
            content: contentComment,
            publishedAt: new Date().toISOString().slice(0, 19),
            likes: likesComment
        }

        setCommentsList((prevComments) => [...prevComments, newComment]);
        setContentComment('');
    }
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl}/> 
                    <div className={styles.authorInfo}> 
                        <strong>{author.name}</strong>
                        <span> {author.role}</span>                  
                    </div>
                </div>
                    <time 
                        title={publishedDateFormatted}
                        dateTime={publishedAt}>
                        {DateRelativeNow} 
                    </time>

            </header>

            <div className={styles.content}>
                <p>{author.bio}</p>
                {
                    content.map((line, lineIndex) => {   
                        if (line.type === 'paragraph') {
                            return <p key={`paragraph-${line.content}-${lineIndex}`}>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <p key={`link-${line.url}-${line.content}-${lineIndex}`}>
                                <a href={line.url}>{line.content}</a>
                            </p>;
                        } else if (line.type === 'hashtags') {
                            return (
                                <p key={`hashtags-${line.content.join('-')}-${lineIndex}`}>
                                    {line.content.map((hashtag, index) => (
                                        <a key={`hashtag-${hashtag}-${index}`} href={`#${hashtag}`}>{hashtag}</a>
                                    ))}
                                </p>
                            );
                        }
                    })
                }
            </div>

            <form onSubmit={handlerFormSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    value={contentComment}
                    onChange={(event) => setContentComment(event.target.value)}
                    placeholder="Deixe um comentário"
                />  

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form> 

            <div className={styles.commentList}>
                {commentsList.map(comment => {
                    return (
                        <Comment 
                            key={comment.id} 
                            comment={comment}
                            onDeleteComment={handlerDeleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}