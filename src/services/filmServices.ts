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

async function remove(filmId : number) {
    const { rowCount } = await filmRepositories.findById(filmId);
    if (!rowCount) throw errors.notFoundError();

    await filmRepositories.remove(filmId);
}

export default{
    findAll,
    add,
    remove
};