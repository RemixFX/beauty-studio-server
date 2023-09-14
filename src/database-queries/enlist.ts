import { MutationCreateEntryArgs } from "generated/graphql.js";
import db from "../db.js"

export const postEntryDb = async (data: Partial<MutationCreateEntryArgs>) => {
  const { name, phone, service, category, date, time } = data;

  try {
    const entry = await db.query(
      'INSERT INTO entries (name, phone, service, category, date, time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING name, phone, service, category, date, time',
      [name, phone, service, category, date, time]);
    return entry.rows[0];
  } catch (err) {
    console.log(err);
  }
};

export const checkFreeEntry = async (date: string) => {
  try {
    const entry = await db.query(
    `
    SELECT *
    FROM entries
    WHERE date = $1
    `,
     [date]);
     return entry.rows
  } catch (err) {
    console.log(err)
  }
}

export const getEntriesDb = async () => {
  try {
    const entries = await db.query(
      `
      SELECT *
      FROM entries
      WHERE date >= CURRENT_DATE
      AND date <= CURRENT_DATE + INTERVAL '30 days'
      `
    );
    return entries.rows
  } catch (err) {
    console.log(err);
  }
};
