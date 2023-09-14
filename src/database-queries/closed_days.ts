import { QueryGetClosedDaysForAdminArgs } from "generated/graphql.js";
import db from "../db.js"

export const getClosedDaysForAdminDb = async (data: Partial<QueryGetClosedDaysForAdminArgs>) => {
  const month = data.month
  try {
    const closedDays = await db.query(
      `
      SELECT *
      FROM closed_days
      WHERE EXTRACT(month from date) = $1
      `,
      [month]
    );
    return closedDays.rows
  } catch (err) {
    console.log(err)
  }
}

export const getClosedDaysForUserDb = async () => {
  try {
    const closedDays = await db.query(
      `
      SELECT *
      FROM closed_days
      WHERE date >= CURRENT_DATE
      AND date <= CURRENT_DATE + INTERVAL '30 days'
      `
    );
    return closedDays.rows
  } catch (err) {
    console.log(err)
  }
}