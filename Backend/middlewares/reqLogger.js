const reqLogger = (req,res,next)=>{
    console.log(req.url,req.method,req.body);
    next();
}

export default reqLogger