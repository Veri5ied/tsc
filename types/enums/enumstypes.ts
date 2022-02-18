enum Role {
  ADMIN,
  USER,
  AUTHOR,
}

const person: {
  name: string;
  role: Role.ADMIN;
} = {
  name: "Alvin",
  role: Role.ADMIN,
};
