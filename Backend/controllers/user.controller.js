import User from "../schema/user.schema.js";
import { generateToken } from "../utils/token.utils.js";

const registerHandle = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            const error = new Error("All fields are required");
            error.status = 401;
            throw error;
        }


        const isUserExist = await User.findOne({ email });
        console.log(isUserExist);

        if(isUserExist){
            const error = new Error("User already exist");
            error.status = 402;
            throw error;
        }

        const createUser = await User.create({ name, email, password });
        console.log(createUser);


        const accessToken = generateToken(createUser)

        res
        .status(201)
        .cookie("accessToken",accessToken,{httpOnly:true})
        .json({
            success: true,
            message:"User created successfully",
            data:{
                ...createUser.toJSON(),
                password:undefined
            }
        });

    } catch (error) {
        next(error);
    }
}



const loginHandle = async (req, res, next) => {
    try {
        
        const {email , password} = req.body;

        if(!email || !password){
            const error = new Error("All fields are required");
            error.status = 401;
            throw error;
        }

        const isUserExist = await User.findOne({email,password});

        if(!isUserExist){
            const error = new Error("User not found");
            error.status = 401; 
            throw error;
        }

        const accessToken = generateToken(isUserExist)
        console.log(accessToken);

        res
        .status(200)
        .cookie("accessToken",accessToken,{httpOnly:true})    
        .json({
            success: true,
            message:"User logged in successfully",
            data:{
                ...isUserExist.toJSON(),
                password:undefined
            }
        });


    } catch (error) {
        next(error);
    }
}


export {registerHandle,loginHandle}