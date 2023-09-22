import React from 'react'

const Home = () => {
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
                        <li className='border border-dark'>
                            <h3>授業名：青山学院大学の歴史</h3>
                            <p>主席ナシ、課題は楽です</p>
                        </li>
                        <li className='border border-dark'>
                            <h3>授業名：青山学院大学の歴史</h3>
                            <p>主席ナシ、課題は楽です</p>
                        </li>
                        <li className='border border-dark'>
                            <h3>授業名：青山学院大学の歴史</h3>
                            <p>主席ナシ、課題は楽です</p>
                        </li>
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