import { db } from "../config/database.ts";

interface Film {
    name: string;
    synopsis: string;
    pricePerDay: number;
    date: Date;
    image: string;
  }

async function findAll(){
    return await db.query(`SELECT * FROM films;`);
}

async function findById(filmId: number){
    return await db.query(`SELECT * FROM films WHERE id=$1;`, [filmId]);
}

async function findByName(name: string){
    return await db.query('SELECT * FROM films WHERE name LIKE $1', [`%${name}%`]);
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

async function rent(filmId: number)
{
    return await db.query(`UPDATE films SET "isRented"=true WHERE id=$1;`, [filmId]);
}

async function remove(filmId: number)
{
    return await db.query(`DELETE FROM films WHERE id=$1;`, [filmId]);
}

export default {
    findAll,
    findById,
    findByName,
    add,
    rent,
    remove
};