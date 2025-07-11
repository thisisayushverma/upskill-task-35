import Post from "../schema/post.schema.js";

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().populate("user","name").sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: posts })
    } catch (error) {
        const err = new Error(error.message);
        err.status = 500;
        next(err);
    }
}

const getAllPostsById = async (req, res, next) => {
    try {
        const posts = await Post.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: posts })
    } catch (error) {
        const err = new Error(error.message);
        err.status = 500;
        next(err);
    }
}


const createPost = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const post = await Post.create({ title, description, user: req.user._id });
        res.status(201).json({ success: true, data: post })
    } catch (error) {
        const err = new Error(error.message);
        err.status = 500;
        next(err);
    }
}

const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({ success: true, data: post })
    } catch (error) {
        const err = new Error(error.message);
        err.status = 500;
        next(err);
    }
}

const upadatePost = async (req, res, next) => {
    try {

        const { title, description } = req.body;
        const post = await Post.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
        res.status(201).json({ success: true, data: post })

    } catch (error) {
        const err = new Error(error.message);
        err.status = 500;
        next(err);
    }
}


const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(201).json({ success: true, data: post })
    } catch (error) {
        const err = new Error(error.message);
        err.status = 500;
        next(err);
    }
}


export { 
    getAllPosts, 
    getAllPostsById, 
    createPost, 
    upadatePost, 
    getPost, 
    deletePost 
}