import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comments/Commnets'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content, comments }) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const DateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handlerFormSubmit() {  
        event.preventDefault()
        console.log('teste');
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
                    content.map(line => {   
                        if (line.type === 'paragraph') {
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href={line.url}>{line.content}</a></p>
                        }

                        else if (line.type === 'hashtags') {
                            return <p key={line.content}>
                            {line.content.map((hashtag, index) => (
                                <>
                                    <a key={index} href={`#${hashtag}`}>{hashtag}</a>
                                    {index < line.content.length - 1 && ' '}
                                </>
                            ))}
                        </p>
                        }
                    })
                }
                
            </div>

            <form onSubmit={handlerFormSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />  

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form> 

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                    )
                })}
            </div>
        </article>
    )
}