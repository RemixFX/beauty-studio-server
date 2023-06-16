import { GraphQLError } from 'graphql';
import { getEntriesDb, postEntryDb } from '../database-queries/enlist.js';

const resolvers = {
  Query: {
    getEntries: () => {
      return getEntriesDb()
    },
  },
  Mutation: {
    pushEntry: (parent, args) => {
      return postEntryDb(args)
  }
    }
  
};

export default resolvers
