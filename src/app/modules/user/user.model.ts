import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { IUser } from "./user.interface";
const userSchema: Schema<IUser> = new Schema<IUser>({
    name:{
        type:String,
        required: [true, "Name is required"],
    },
    email:{
        type:String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: "Invalid email format"
        },
    },
    phone:{
        type:String,
        required: [true, "Phone number is required"],
        validate: {
            validator: (value: string) => validator.isMobilePhone(value, "any", { strictMode: false }),
            message: "Invalid phone number format"
        }
    },

    password:{
        type:String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters long"],
        validate: {
            validator: (value: string) => validator.isStrongPassword(value),
            message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
        }
    }
});

userSchema.pre("save", async function (next) {
  // Only hash if password is modified or new
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});



const User = mongoose.model<IUser>("User", userSchema);
export default User;