// const mongoose = require('mongoose');
// const { Schema } = mongoose;
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const AuthSchema = new Schema({
  email: {
    type: String,
    require: true,
    trim: true
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