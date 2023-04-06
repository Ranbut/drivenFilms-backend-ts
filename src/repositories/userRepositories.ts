import { db } from "../config/database.ts";
  
interface User {
    name: string;
    email: string;
    cpf: string;
    password: string;
  }
  
  async function signUp({ name, email, cpf, password } : User) {
    await db.query(
      `
          INSERT INTO users (name, email, cpf, password)
          VALUES ($1, $2, $3, $4)
      `,
      [name, email, cpf, password]
    );
  }
  
  async function findById(id: number) {
    return await db.query(
      `    
      SELECT * FROM users WHERE id=$1
    `,
      [id]
    );
  }

  async function findByEmail(email: string) {
    return await db.query(
      `    
      SELECT * FROM users WHERE email=$1
    `,
      [email]
    );
  }


  async function findByCpf(cpf: string) {
    return await db.query(
      `    
      SELECT * FROM users WHERE cpf=$1
    `,
      [cpf]
    );
  }

export default {
    signUp,
    findById,
    findByEmail,
    findByCpf
};