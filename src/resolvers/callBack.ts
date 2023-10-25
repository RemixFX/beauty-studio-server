import dotenv from 'dotenv'
import { postCallBackPhoneDb } from "../database-queries/callBack.js";
import { Resolvers } from "../generated/graphql.js"
import { GraphQLError } from "graphql";
import sampleMessage from "../greenApi/CallBackSampleMessage.js";
import { RESTGreenApi } from "../greenApi/api.js";
/* dotenv.config() */
const greenApi = new RESTGreenApi

const callBack: Resolvers = {
  Mutation: {
    postCallBackPhone: async (parent, args) => {
      const data = await postCallBackPhoneDb(args)
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

export default callBack;