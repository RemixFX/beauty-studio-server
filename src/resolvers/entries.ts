import { GraphQLError } from 'graphql';
import { getEntriesDb, postEntryDb } from '../database-queries/enlist.js';
import { Resolvers } from '../generated/graphql.js';

const entries: Resolvers = {
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

export default entries;
