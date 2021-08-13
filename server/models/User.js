import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  username: {type: String, required: true},
  news: [
    {
      title: {type: String},
      body: {type: String},
      urlToImage: {type: String},
      createdAt: {type: String},
    },
  ],
});
export default mongoose.model('User', userSchema);
