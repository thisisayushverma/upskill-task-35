import { Router } from "express";
import { getAllPosts, getAllPostsById,createPost,upadatePost,getPost,deletePost } from "../controllers/post.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();


router.get('/',authenticate,getAllPosts)
router.get('/user/',authenticate,getAllPostsById)
router.post('/',authenticate,createPost)
router.put('/:id',authenticate,upadatePost)
router.get('/:id',authenticate,getPost)
router.delete('/:id',authenticate,deletePost)



export default router