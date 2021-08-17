import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
const dataBaseUrl =
  'mongodb+srv://admin:dfgoplyui@users.zjt9r.mongodb.net/newsApp?retryWrites=true&w=majority';

const app = express();
let apolloServer = null;

const startServer = async () => {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({app});
};

const startServer2 = async () => {
  mongoose.connect(
    dataBaseUrl,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
    () => console.log('*DB'),
  );
  app.listen(4000, () => {
    console.log('*SERVER');
  });
};
startServer();
startServer2();
