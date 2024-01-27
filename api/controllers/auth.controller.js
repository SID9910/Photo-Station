import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'; //used to encypt the password in  mongodb database
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res ,next)=>{

     const {username ,email , password} = req.body;
     if (
      !username ||
      !email ||
      !password ||
      username === '' ||
      email === '' ||
      password === ''
    ) {
      next(errorHandler(400, 'All fields are required'));
    }

     //used to encypt or hashed the password in  mongodb database
     const hashedPassword = bcryptjs.hashSync(password, 10); 
     const newUser = new User({
        username,
        email,
        password:hashedPassword,

     });
  try{
     await newUser.save();
     res.json('Signup successful');
  }catch(error){

     next(error);
  }
};


//sign in

export const signin = async (req , res, next ) =>{
   const { email , password } = req.body;

   if(!email || !password || email ==='' || password ===''){
      next(errorHandler(400 ,'All fields are required'));
   }

   try{

      const validUser = await User.findOne({email});
      if(!validUser){
         next(errorHandler(404,'User not found'));
      }
      //hashed password ko normal karke input se compare karega
      const validpassword =bcryptjs.compareSync(password ,validUser.password);
      if(!validpassword){
         next(errorHandler(400,'Invalid password'));
      }
   }catch(error){
      next(error)
   }
}