import { Schema } from "mongoose";

const userSchema = new Schema ({
    firstName :{
        type: String,
       
    },
    lastName :{
        type: String, 
        
    },
    email :{
        type: String, required: true, unique: true,
    },
    password: { type: String, required: true, },
    telephone: { type: String},
});

export const userMode1 = models ('user', userSchema)