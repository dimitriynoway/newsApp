import {ApolloServer, gql} from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import User from './models/User';
import bcrypt from 'bcrypt';
const dataBaseUrl =
  'mongodb+srv://admin:dfgoplyui@users.zjt9r.mongodb.net/newsApp?retryWrites=true&w=majority';

const app = express();

const typeDefs = gql`
  type Query {
    getUser: User!
    getSavedNews(id: String!): [SavedNews]
  }
  type SavedNews {
    title: String
    body: String
    urlToImage: String
    createdAt: String
    error: String
  }
  type User {
    email: String!
    username: String!
  }
  type RegisterRes {
    email: String
    username: String
    error: String
  }
  type LoginRes {
    email: String
    username: String
    error: String
    id: String
  }
  type SavedNewsRes {
    title: String
    body: String
    urlToImage: String
    createdAt: String
    error: String
  }
  type Mutation {
    register(email: String!, username: String!, password: String!): RegisterRes!
    login(email: String!, password: String!): LoginRes!
    addSavedNews(
      id: String
      title: String
      body: String
      urlToImage: String
      createdAt: String
    ): SavedNewsRes
  }
`;
// addSavedNews: (title)

const resolvers = {
  Query: {
    getUser: () => {
      return {
        email: '2@gmail.com',
        username: 'dima',
        password: '123',
      };
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
    addSavedNews: async (_, {id, title, body, urlToImage, createdAt}) => {
      try {
        const user = await User.findByIdAndUpdate(
          id,
          {$push: {news: {title, body, urlToImage, createdAt}}},
          {new: true},
        );
        if (!user) return {error: 'Error'};
        console.log(title, body, urlToImage, createdAt);
        return {title, body, urlToImage, createdAt};
      } catch (error) {
        console.log(error);
      }
    },
  },
};

let apolloServer = null;
const startServer = async () => {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({app});
};
startServer();

const startServer2 = async () => {
  mongoose.connect(
    dataBaseUrl,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
    () => console.log('db is connected'),
  );
  app.listen(4000, () => {
    console.log('server is here');
    console.log(
      `gql path is ${'http://localhost:4000' + apolloServer.graphqlPath}`,
    );
  });
};
startServer2();
