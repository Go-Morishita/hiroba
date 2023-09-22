import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20,
    },
    content: {
        type:String,
        default: '補足説明はありません'
    }
})

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;