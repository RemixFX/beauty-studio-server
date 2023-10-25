import db from "../db.js"

export const postCallBackPhoneDb = async (data) => {
  const { date, phone, name } = data
  console.log(data)
  try {
    const result = await db.query(
      `
      INSERT
      INTO call_back (date, phone, name)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [date, phone, name]
    )
    return result.rows[0];
  } catch (err) {
    console.log(err);
  }
} 