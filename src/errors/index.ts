function conflictError(message: string) {
  return {
    name: "ConflictError",
    message,
  };
}

function invalidCredentialsError() {
  return {
    name: "InvalidCredentialsError",
    message: "Email or password are incorrect",
  };
}

function unauthorizedError() {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}

function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

function duplicatedEmailError(email: string) {
    return {
      name: "DuplicatedEmailError",
      message: "There is already an user with given email",
      email,
    };
  }

function duplicatedCpfError(cpf: string) {
    return {
      name: "DuplicatedCpfError",
      message: "There is already an user with given cpf",
      cpf,
    };
  }

  function duplicatedFilmError(filmName: string) {
    return {
      name: "DuplicatedFilmError",
      message: "There is already a film with the name given",
      filmName,
    };
  }

export default{
    conflictError,
    invalidCredentialsError,
    unauthorizedError,
    notFoundError,
    duplicatedEmailError,
    duplicatedCpfError,
    duplicatedFilmError
};