import mongoose from "mongoose";

const User = mongoose.model('User',{
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  phoneNumber: Number,
  password: String,
  confirmPassword: String,
  createdAt: Date
})


export default User