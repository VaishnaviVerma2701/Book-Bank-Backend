import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },

    email:{
        type:String,
         required:true,
         unique:true
    },


    phone:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },

    address:{
        type:String,
        required:true,
    },
    book:{
        type:String,
        required:true,
    },

   
})
const Usercontact= mongoose.model("Usercontact",contactSchema)
export default Usercontact


