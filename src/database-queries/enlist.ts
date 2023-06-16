import db from "../db.js"

 export const postEntryDb = async (data) => {
  const { name, phone, service, category, date, time } = data;
  
  try {
     const entry = await db.query(
       'INSERT INTO entries (name, phone, service, category, date, time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, date, time',
       [name, phone, service, category, date, time]);
     return entry.rows[0];
   } catch (err) {
     console.log(err);
   }
};

 export const getEntriesDb = async () => {
  try {
     const entries = await db.query(
       'SELECT * FROM entries ORDER BY date');
     return entries.rows;
   } catch (err) {
     console.log(err);
   }
};
