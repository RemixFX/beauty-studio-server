import { GraphQLError } from 'graphql';
import { checkFreeEntry, getEntriesDb, postEntryDb } from '../database-queries/enlist.js';
import { Resolvers } from '../generated/graphql.js';

const entries: Resolvers = {
  Query: {
    getEntries: () => {
      return getEntriesDb()
    },
  },
  Mutation: {
    createEntry: async (parent, args) => {
      const result = await checkFreeEntry(args.date)
      const previousHour = parseInt(args.time) - 1
      const currentHour = parseInt(args.time)
      const nextHour = parseInt(args.time) + 1

      const checkFreeHour = result.some((entry) => {
        const entryTime = parseInt(entry.time)
        return previousHour === entryTime ||
          currentHour === entryTime ||
          nextHour === entryTime
      })
      if (checkFreeHour) {
        return new GraphQLError('На это время только что записались, выберите другое')
      } else {
        return postEntryDb(args)
      }
    }
  }

};

export default entries;
