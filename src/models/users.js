import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: 'string',
    trim: true,
    minlength: 8,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
})

const User = model('User', userSchema)

export default User
