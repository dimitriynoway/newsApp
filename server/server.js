import {ApolloServer, gql} from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
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
    email: String!
    username: String!
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
    register: (_, {email, username, password}) => {
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
