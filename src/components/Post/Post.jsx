import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comments/Commnets'
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZEwmuUASNMdxx4tE5b_LE2BFZv7YPEcxYQ&s"/> 
                    <div className={styles.authorInfo}> 
                        <strong> User Name </strong>
                        <span> Web Developer </span>                  
                    </div>
                </div>
                <time title="20 de março às 8h" dateTime="2023-03-20 20:00:00"> Publicado há 1h </time>

            </header>

            <div className={styles.content}>

                <p>
                    Software Developer
                </p>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, vero quasi? Mollitia corporis vel ab in, quidem debitis? Voluptate eum accusamus suscipit veniam perferendis, iusto quidem reprehenderit temporibus vitae eius. </p>
                <p>
                    <a href="">jane.design/doctorcare</a>
                </p>

                <p>
                    <a href="#">#feed</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#posts</a>
                </p>
            </div>

            <form action="" className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />  


                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form> 

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}