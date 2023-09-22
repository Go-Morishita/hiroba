import express from 'express'
import mongooes from 'mongoose'
import PostModel from './models/Posts.js'
import cors from 'cors'

const app = express()
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongooes.connect(
    "mongodb+srv://shiggyjr1492:JLg2JmZ8OCVUbnLi@cluster0.zhxwvqs.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log('データベースに接続できました。'))

//データを取得
app.get('/api/v1/posts', async(req,res) => {
    try{
        const Posts = await PostModel.find({});
        res.status(200).json(Posts)
    }catch(err){
        console.log(err)
    }
})

app.listen(PORT, () =>{
    console.log('サーバーが立ち上がりました。')
})

