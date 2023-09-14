import { getClosedDaysForAdminDb, getClosedDaysForUserDb } from "../database-queries/closed_days.js";
import { Resolvers } from "generated/graphql.js";

const closedDays: Resolvers = {
  Query: {
    getClosedDaysForAdmin: (parent, args) => {
      return getClosedDaysForAdminDb(args)
    },

    getClosedDaysForUser: () => {
      return getClosedDaysForUserDb()
    }
  }
}

export default closedDays;