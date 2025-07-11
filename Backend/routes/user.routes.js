import express from "express";
import { loginHandle, registerHandle } from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const route = express.Router();


route.post('/register',registerHandle)
route.get('/verify',authenticate,(req,res)=>res.status(200).json({success:true,data:req.user}))
route.post('/login',loginHandle)




export default route;