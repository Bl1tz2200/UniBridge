import mongoose, { Schema } from 'mongoose';
import { genSaltSync, hashSync } from "bcrypt";

const userSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.pre('save', function(next) { 
    if (this.isModified('password')) {
        if(typeof this.password === "string"){
            const hashed = hashSync(this.password, genSaltSync(10));
            this.password = hashed;
        } else {
        console.log("ERROR while making hash of password because of mistype")
        }
    } 
    next();
});

export const UserModel = mongoose.model('User', userSchema);