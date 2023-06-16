import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import resolvers from './resolvers/index.js';

const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
});



console.log(`🚀  Server ready at: ${url}`);