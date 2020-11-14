import mongoose from 'mongoose'

const user = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  userType: String,
  createdAt: String
});



export default user;
