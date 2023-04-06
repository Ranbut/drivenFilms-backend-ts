import userRepositories from "../repositories/userRepositories.ts";
import errors from "../errors/index.ts"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/index.ts";

async function signUp({ name, email, cpf, password } : IUser) {
    const { rowCount: rowsEmail } = await userRepositories.findByEmail(email);
    if (rowsEmail) throw errors.duplicatedEmailError(email);

    const { rowCount: rowsCpf } = await userRepositories.findByCpf(cpf);
    if (rowsCpf) throw errors.duplicatedCpfError(cpf);

    const hashPassword = await bcrypt.hash(password, 10);
    await userRepositories.signUp({ name, email, cpf, password: hashPassword });
}

async function login({ email, password } : IUser) {
    
    const {
        rowCount,
        rows: [user],
      } = await userRepositories.findByEmail(email);
      if (!rowCount) throw errors.invalidCredentialsError();

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) throw errors.invalidCredentialsError();

      const secret = process.env.SECRET_JWT || 'default_secret';

      const token = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 });
      return token;
}

export default {
    signUp,
    login
};