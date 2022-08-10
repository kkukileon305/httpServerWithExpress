const users = [
  {
    id: 1,
    name: 'Rebekah Johnson',
    email: 'Glover12345@gmail.com',
    password: '123qwe',
  },
  {
    id: 2,
    name: 'Fabian Predovic',
    email: 'Connell29@gmail.com',
    password: 'password',
  },
];

export const getUser = (req, res) => {
  res.json(users);
};

// 과제 1
export const createUser = (req, res) => {
  users.push(req.body);
  console.log(users);

  res.json({
    message: 'userCreated',
  });
};
