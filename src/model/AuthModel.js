const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const AuthSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    trim: true,
  },
  email: {
    type: String,
    unique: 'Email Address is Already Registered!',
    required: [true, 'Email is required!'],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minlength: [6, 'Password should be greater than or equal 6 character!']
  },
  role: {
    type: String,
    default: 'user',
    enum: ['admin', 'merchant', 'user'],
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'verified', 'blocked'],
  },
  profileImage: String,
},
  { timestamp: true },
);

AuthSchema.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);
  this.password = hash;
  next();
});
AuthSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const comparePass = await bcrypt.compare(password, user.password);
  return comparePass;
};

module.exports = mongoose.model("Auth", AuthSchema);