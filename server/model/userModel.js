import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
    },
    email: {
        type:String,
        required: [true, "email is required"],
        unique: true,
        lowercase: true,

    },
    address: {
        type: String,
        required: [true,"address is required"],
        trim: true,
    }
},{
    timestamps: true,
});



const User = mongoose.model("User", userSchema);
export default User;
