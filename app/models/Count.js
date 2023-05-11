import mongoose from "mongoose";


const Count = mongoose.model('Count', {
  userID: String,
  description: String,
  createdAt: String,
  time: Number
})

export default Count;