import User from './models/User';
import bcrypt from 'bcrypt';
export default {
  Query: {
    getUser: () => {
      return {
        email: '2@gmail.com',
        username: 'dima',
        password: '123',
      };
    },
  },
  Mutation: {
    register: async (_, {email, username, password}) => {
      if (!email || !username || !password)
        return {error: 'Some fields are empty'};
      //*validate income data
      try {
        const isUserExiste = await User.findOne({email});
        if (isUserExiste) return {error: 'User already existed'};
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
          email,
          password: hashedPassword,
          username,
        });
        const savedUser = await newUser.save();
        return {email, username};
      } catch (err) {
        return {error: err};
      }
    },
    login: async (_, {email, password}) => {
      try {
        if (!email || !password) return {error: 'Some fields are empty'};
        const user = await User.findOne({email});
        if (!user) return {error: 'User does not exist'};
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) return {error: 'Incorrect password'};
        return {email: user.email, username: user.username, id: user._id};
      } catch (error) {
        console.log(error);
        return {error};
      }
    },
    addSavedNews: async (_, {id, title, body, urlToImage, publishedAt}) => {
      try {
        const user = await User.findByIdAndUpdate(
          id,
          {$push: {news: {title, body, urlToImage, publishedAt}}},
          {new: true},
        );
        if (!user) return {error: 'Error'};
        return {title, body, urlToImage, publishedAt};
      } catch (error) {
        console.log(error);
      }
    },
    getSavedNews: async (_, {id}) => {
      try {
        const user = await User.findById(id);
        if (!user) return [{error: 'User does not exist'}];
        return user.news;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
