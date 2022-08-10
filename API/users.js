export const getUser = (req, res) => {
  res.json(users);
};

export const createUser = (req, res) => {
  // 과제1
  users.push(req.body);
  console.log(users);

  res.json({
    message: 'userCreated',
  });
};
