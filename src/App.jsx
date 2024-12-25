import './components/global.css'  
import { Sidebar } from "./components/Sidebar/Sidebar"
import {Header} from "./components/Header/Header"
import styles from "./App.module.css"
import { Post } from './components/Post/Post'


const posts = [
  {
    "author": {
      "name": "Gabriel Costa",
      "role": "Web Developer",
      "bio": "Desenvolvedor apaixonado por criar soluções web.",
      "avatarUrl": "https://i.pravatar.cc/150?img=7"
    },
    "publishedAt": "2024-03-20T20:00:00",
    "content": [
      { "type": "paragraph", "content": "Como a tecnologia está transformando a forma como interagimos com a saúde." },
      { "type": "link", "content": "jane.design/doctorcare", "url": "https://jane.design/doctorcare" },
      { "type": "hashtags", "content": ["#tecnologia", "#saude", "#inovação"] }
    ],
    "comments": [
      { 
        "id": 'o9b3EM20XeyEWMZIVOj5E', 
        "author": { 
          "name": "Lucas Pereira", 
          "avatarUrl": "https://i.pravatar.cc/150?img=12" 
        }, 
        "content": "Excelente post! A inovação na saúde é algo que realmente importa.", 
        "publishedAt": "2024-12-24T10:00:00", 
        "likes": 20 
      },
      { 
        "id": 'TvqwQwIST7r1U98VRumco', 
        "author": { 
          "name": "Carla Lima", 
          "avatarUrl": "https://i.pravatar.cc/150?img=8" 
        }, 
        "content": "Muito bom, adorei o tema e o conteúdo. Vou dar uma olhada no link!", 
        "publishedAt": "2024-12-24T12:15:00", 
        "likes": 35 
      }
    ]
  },
  {
    "author": {
      "name": "Mariana Souza",
      "role": "Product Manager",
      "bio": "Gestora de produtos com paixão por tecnologia e inovação.",
      "avatarUrl": "https://i.pravatar.cc/150?img=15"
    },
    "publishedAt": "2024-08-21T15:00:00",
    "content": [
      { "type": "paragraph", "content": "Como uma boa gestão pode transformar o futuro dos produtos de tecnologia." },
      { "type": "link", "content": "example.com/another-post", "url": "https://example.com/another-post" },
      { "type": "hashtags", "content": ["#gestaodeprodutos", "#tecnologia", "#inovacao"] }
    ],
    "comments": [
      { 
        "id": 1, 
        "author": { 
          "name": "Felipe Martins", 
          "avatarUrl": "https://i.pravatar.cc/150?img=3" 
        }, 
        "content": "Muito bom, continue assim! Realmente a gestão é um dos pilares do sucesso de qualquer produto.", 
        "publishedAt": "2023-12-25T10:30:00", 
        "likes": 15 
      },
      { 
        "id": 2, 
        "author": { 
          "name": "Jéssica Oliveira", 
          "avatarUrl": "https://i.pravatar.cc/150?img=18" 
        }, 
        "content": "Gostei muito deste post, o conteúdo é rico e bem explicado! Vou acompanhar mais.", 
        "publishedAt": "2023-12-25T12:00:00", 
        "likes": 10 
      }
    ]
  }
];
  

function App() {
  return (
    <div>
      <Header/>
       <div className={styles.wrapper}>
        <Sidebar/>
        <main>
            {
              posts.map(post => {
                return (<Post key={post.id}
                  author={post.author}
                  content={post.content}
                  comments={post.comments}
                  publishedAt={post.publishedAt}
                />
                )
              })}
        </main>
       </div>
    </div>
  )
}

export default App
