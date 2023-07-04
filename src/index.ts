import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import resolvers from './resolvers/index.js';
import { ApolloServerErrorCode } from '@apollo/server/errors';

const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (formattedError, error) => {
    if (formattedError.extensions.code === ApolloServerErrorCode.INTERNAL_SERVER_ERROR) {
      return formattedError
    } else
      return { ...formattedError, message: 'Ошибка сервера, попробуйте позже' }
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
});



console.log(`🚀  Server ready at: ${url}`);