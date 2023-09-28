import { deleteClosedDayDb, getClosedDaysForAdminDb, getClosedDaysForUserDb, setClosedDayDb } from "../database-queries/closed_days.js";
import { Resolvers } from "generated/graphql.js";

const closedDays: Resolvers = {
  Query: {
    getClosedDaysForAdmin: (parent, args) => {
      return getClosedDaysForAdminDb(args)
    },

    getClosedDaysForUser: () => {
      return getClosedDaysForUserDb()
    }
  },
  Mutation: {
    setClosedDay: (parent, args) => {
      return setClosedDayDb(args)
    },
    
    deleteClosedDay: (parent, args) => {
      return deleteClosedDayDb(args)
    }
  }
}

export default closedDays;