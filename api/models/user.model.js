import mongoose from "mongoose";
import { type } from "os";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://st.depositphotos.com/1537427/3571/v/950/depositphotos_35717211-stock-illustration-vector-user-icon.jpg",
    },
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);

export default User;