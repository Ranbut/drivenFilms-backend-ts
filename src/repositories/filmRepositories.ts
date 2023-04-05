import { db } from "../config/database.ts";

interface Film {
    name: string;
    synopsis: string;
    pricePerDay: number;
    date: Date;
    image: string;
    stockTotal: number;
  }

async function findAll(){
    return await db.query(`SELECT * FROM films;`);
}

async function add({
    name,
    synopsis,
    pricePerDay,
    date,
    image
}: Film)
{
    return await db.query(
        `
        INSERT INTO films (name, synopsis, "pricePerDay", date, image)
        VALUES ($1, $2, $3, $4, $5)
        ;`,
        [name, synopsis, pricePerDay, date, image]
      );
}

export default {
    findAll,
    add
};