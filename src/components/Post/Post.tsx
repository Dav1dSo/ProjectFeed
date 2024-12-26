import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comments/Commnets'
import styles from './Post.module.css'
import { nanoid } from 'nanoid'
import { FormEvent, useState } from 'react'

interface Author {
    name: string,
    role: string,
    bio: string,
    avatarUrl: string       
}

interface Content {
    type: string,
    content: string | string[];
    url?: string
}   

interface Comment {
    id: string,
    author: {
        name: string,
        avatarUrl: string
    },
    content: string,
    publishedAt: string | Date,
    likes: number
}

interface PostProps {
    readonly author: Author,
    readonly publishedAt: Date,
    readonly content: Content[],
    readonly comments: Comment[]
}   


export function Post({ author, publishedAt, content, comments }: PostProps) {

    const commentsData = [...comments]
    const [commentsList, setCommentsList] = useState(commentsData)  

    const [contentComment, setContentComment] = useState('')
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    function handlerLikeComment(contentId: string) {
        const commentsAfterLike = commentsList.map(comment => {
            if (comment.id === contentId) {
                return {
                    ...comment,
                    likes: comment.likes + 1
                }
            } else {
                return comment
            }
        })

        setCommentsList(commentsAfterLike)
    }

    const DateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handlerDeleteComment(contnetId: string) {
        console.log(`deletar comentário! ${contnetId}`);

        const CommentsAfterDelete = commentsList.filter(comment => comment.id !== contnetId)
        setCommentsList(CommentsAfterDelete)
    }

    function handlerFormSubmit(event: FormEvent) {  
        event.preventDefault()
 
        const newComment: Comment = {
            id: nanoid(),
            author: {   
                name: author.name,   
                avatarUrl: author.avatarUrl   
            },
            content: contentComment,
            publishedAt: new Date(),
            likes: 0
        }

        setCommentsList((prevComments: Comment[]) => [...prevComments, newComment]);
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
                        dateTime={publishedAt.toISOString()}>
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
                                <p key={`hashtags-${Array.isArray(line.content) ? line.content.join('-') : line.content}-${lineIndex}`}>
                                    {Array.isArray(line.content) ? line.content.map((hashtag, index) => (
                                        <a key={`hashtag-${hashtag}-${index}`} href={`#${hashtag}`}>{hashtag}</a>
                                    )) : line.content}
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
                    required
                    onInvalid={(event) => {
                        const target = event.target as HTMLTextAreaElement;
                        target.setCustomValidity('Esse campo e obrigatorio!');
                    }}
                    onInput={(event) => {
                        const target = event.target as HTMLTextAreaElement;
                        target.setCustomValidity('');
                    }}
                />  

                <footer>
                    <button type="submit" disabled={contentComment.length === 0}>
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
                            onLikeComment={handlerLikeComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}