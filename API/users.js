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

export const getUser = (_, res) => {
  res.json(users);
};

// 과제 1
export const createUser = ({ body: { id, name, email, password } }, res) => {
  if (
    !(typeof id === 'string') || //
    !(typeof name === 'string') ||
    !(typeof email === 'string') ||
    !(typeof password === 'string')
  ) {
    return res.status(400).json({
      message: 'body가 유효하지 않습니다.',
    });
  }

  users.push({
    id,
    name,
    email,
    password,
  });

  res.json({
    message: 'userCreated',
  });
};
