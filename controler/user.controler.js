import User from "../model/user.modal.js";
import bcryptjs from "bcryptjs"
import Usercontact from "../model/usercontact.modal.js";


export const signup = async(req,res)=>{
  try{
  const{fullname,email,password}=req.body;
   const user=  await User.findOne({email})
   if(user){
    return res.status(400).json({message:"User already exists"})
   }
   
   const hashPassword =  await bcryptjs.hash(password,10) // for secure our password
    const createdUser=new User({
        fullname:fullname,
        email:email,
        password:hashPassword // for secure our password
    })
     await createdUser.save()
    res.status(200).json({message:"user created succefully",
        user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        },
    });
  } 
  catch(error){
   console.log("Error" +error.message)
   res.status(500).json({message:"Internal server error"})
  } 
}

export const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({email});
        const isMatch= await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"invaild username and password"});
        }
        else{
            res.status(200).json({message:"login successfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            },
        });
        }
    }
    catch(error){
console.log(error.message)
res.status(500).json({message:"internal server error"})
    }
}

export const contact = async(req,res)=>{
     try{
        const{fullname,email,phone,city,address,book}= req.body;

        const createcontact = new  Usercontact({
            fullname:fullname,
           email:email,
           phone:phone,
           city:city,
           address:address,
           book:book,  
        })
        await createcontact.save()
        res.status(200).json({message:"your response is succefulyy submited",
            user:{
                _id:createcontact._id,
                fullname:createcontact.fullname,
                email:createcontact.email,
                phone:createcontact.phone,
                city:createcontact.city,
                address:createcontact.address,
                book:createcontact.book
            },
        });
     }
     catch(err){
        console.log("Error" +err.message)
        res.status(500).json({message:"Internal server error"})
     }
}




