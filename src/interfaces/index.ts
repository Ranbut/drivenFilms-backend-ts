interface IFilm {
    name: string;
    synopsis: string;
    pricePerDay: number;
    date: Date;
    image: string;
    stockTotal: number;
    isRented: boolean
  }

  interface IUser {
    name: string;
    email: string;
    cpf: string;
    password: string;
  }

export { IFilm, IUser }