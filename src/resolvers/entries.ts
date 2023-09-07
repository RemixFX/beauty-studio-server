import { GraphQLError } from 'graphql';
import { checkFreeEntry, getEntriesDb, postEntryDb } from '../database-queries/enlist.js';
import { Resolvers } from '../generated/graphql.js';
import dotenv from 'dotenv'
import { RESTGreenApi } from '../greenApi/api.js';
import sampleMessage from '../greenApi/sampleMessage.js'
dotenv.config()

const greenApi = new RESTGreenApi

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
        const data = await postEntryDb(args)
        if (!data) {
          return new GraphQLError('Ошибка сервера, попробуйте позже')
        }
        greenApi.sendMessage({
          idInstance: process.env.ID_INSTANCE,
          apiTokenInstance: process.env.API_TOKEN_INSTANCE,
          chatId: process.env.CHAT_ID,
          message: sampleMessage(data)
        })
        return data

      }
    }
  }

};

export default entries;
