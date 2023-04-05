import filmRepositories from "../repositories/filmRepositories.ts";

async function findAll() {
    const { rows : films } = await filmRepositories.findAll();
    return films;
}

async function add(film : any) {
    await filmRepositories.add(film);
}


export default{
    findAll,
    add
};