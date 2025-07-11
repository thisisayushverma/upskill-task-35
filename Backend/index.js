import cors from "cors";
import express from "express";
import connectDB from "./db/db.js";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import reqLogger from "./middlewares/reqLogger.js";

configDotenv({
    path: ".env",
});


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"https://upskill-task-35-frontend.vercel.app",
    credentials:true
}));
app.use(cookieParser());
app.use(reqLogger)

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.use('/api/user',userRouter)
app.use('/api/post',postRouter)




app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(err.status || 500).json({message:"Something went wrong",error:err.message})
})

connectDB()
.then(()=>{
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err)=>{
    console.log(err);
})


