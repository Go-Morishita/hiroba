import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const getPosts = async () => {
        try {
            const posts = await axios.get('http://localhost:3000/api/v1/posts')
            console.log(posts.data)
            setPosts(posts.data);
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (subject && content) {
            try {
                await axios.post('http://localhost:3000/api/v1/post', {
                    title: subject,
                    content: content,
                })
                setSubject('')
                setContent('')
                getPosts();
            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            <header>
                <div className="container d-flex align-items-center">
                    <h1 className='topname-style text-center'>青山学院大学 落単授業掲示板</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className='box'>
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <h3>授業名</h3>
                                <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject}/>
                            </div>
                            <div>
                                <h3>担当教員</h3>
                                <input type="text" />
                            </div>
                            <div>
                                <h3>内容</h3>
                                <textarea name="" id="" cols="30" rows="10" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                            </div>
                            <button type='submit'>送信</button>
                        </form>
                    </div>
                    <div className="box">
                        <ul className='list-unstyled d-flex flex-column gap-4 m-3'>
                            {posts && posts.map((post) => (
                                <li className='list-box' key={post._id}>
                                    <h3>授業名：{post.title}</h3>
                                    <h4>担当教員：青山 太郎</h4>
                                    <p>{post.content}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main >
            <footer>
                <div className="copyright pb-2">
                    <p className='text-center'>&copy; 青山学院大学 落単授業掲示板 2023</p>
                </div>
            </footer>
        </div >
    )
}

export default Home