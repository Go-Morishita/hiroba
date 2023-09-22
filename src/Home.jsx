import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [Posts, setPosts] = useState();

    const getPosts = async () => {
        try {
            let Posts = await axios.get('http://localhost:3000/api/v1/posts')
            console.log(Posts.data)
            setPosts(Posts.data);
        } catch (err) {
            console.log(err)
        }
    }


    //サイトにアクセスした際に一度だけデータを取得
    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            <header>
                <div className="container d-flex align-items-center">
                    <h1>青山学院大学 落単授業掲示板</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <div>
                        <form action="">
                            <div>
                                <h3>授業名</h3>
                                <input type="text" />
                            </div>
                            <div>
                                <h3>内容</h3>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                    <ul className='list-unstyled d-flex flex-column gap-2'>
                        {Posts && Posts.map((Post) =>
                            <li className='border border-dark' key={Post._id}>
                                <h3>{Post.title}</h3>
                                <p>{Post.content}</p>
                            </li>)
                        }
                    </ul>
                </div>
            </main>
            <footer>
                <div className="copyright">
                    <p className='text-center'>&copy; 青山学院大学 落単授業掲示板 2023</p>
                </div>
            </footer>
        </div>
    )
}

export default Home