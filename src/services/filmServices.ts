import filmRepositories from "../repositories/filmRepositories.ts";
import { IFilm } from "../interfaces/index.ts";
import errors from "../errors/index.ts";

async function findAll() {
    const { rows : films } = await filmRepositories.findAll();
    return films;
}

async function add(film : IFilm) {
    const { rowCount } = await filmRepositories.findByName(film.name);
    if (rowCount) throw errors.duplicatedFilmError(film.name);

    await filmRepositories.add(film);
}

async function rent(filmId : number) {
    const { rowCount, rows: [film] } : { rowCount: number, rows: IFilm[] } = await filmRepositories.findById(filmId);
    if (!rowCount) throw errors.notFoundError();
    if(film.isRented) throw errors.alreadyRentedError(film.name);

    await filmRepositories.rent(filmId);
}

async function remove(filmId : number) {
    const { rowCount } = await filmRepositories.findById(filmId);
    if (!rowCount) throw errors.notFoundError();

    await filmRepositories.remove(filmId);
}

export default{
    findAll,
    add,
    rent,
    remove
};