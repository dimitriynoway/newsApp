import {ApolloServer, gql} from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import User from './models/User';
import bcrypt from 'bcrypt';
const dataBaseUrl =
  'mongodb+srv://admin:dfgoplyui@users.zjt9r.mongodb.net/Users?retryWrites=true&w=majority';

const app = express();

const typeDefs = gql`
  type Query {
    getUser: User!
  }
  type User {
    email: String!
    username: String!
  }
  type RegisterRes {
    email: String
    username: String
    errors: [String]!
  }
  type LoginRes {
    email: String!
    username: String
  }
  type Mutation {
    register(email: String!, username: String!, password: String!): RegisterRes!
    login(email: String!, password: String!): LoginRes!
  }
`;

const resolvers = {
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
      //*if(!email||!username||!password) return {}
      //*validate income data
      try {
        const isUserExiste = await User.findOne({email});
        if (isUserExcite) return {errors: ['User already existed']};
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
          email,
          password: hashedPassword,
          username,
        });
        const savedUser = await newUser.save();
        console.log(savedUser);
      } catch (err) {
        console.log(err);
      }
      console.log(email, username, password);
      return {email, username};
    },
    login: (_, {email, password}) => {
      return {email};
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
    {useNewUrlParser: true, useUnifiedTopology: true},
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
