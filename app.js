const express = require('express');
const { data } = require('./data');
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

const posts = [
  {
    id: 1,
    title: '간단한 HTTP API 개발 시작!',
    content: 'Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.',
    userId: 1,
  },
  {
    id: 2,
    title: 'HTTP의 특성',
    content: 'Request/Response와 Stateless!!',
    userId: 1,
  },
];

const app = express();
app.use(express.json());

// users
const getUser = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  users.push(req.body);

  res.json({
    message: 'userCreated',
  });
};

app.get('/users', getUser);
app.post('/users', createUser);

// posts

const getPost = (req, res) => {
  res.json(data);
};

const createPost = (req, res) => {
  posts.push(req.body);
  console.log(posts);

  res.json({ message: 'postCreated' });
};

const patchPost = (req, res) => {
  console.log(req.body);

  res.json({
    data: {
      userId: 1,
      userName: 'Rebekah Johnson',
      postingId: 1,
      postingTitle: '간단한 HTTP API 개발 시작!',
      postingContent: '노드',
    },
  });
};

app.get('/posts', getPost);
app.post('/posts', createPost);
app.patch('/posts', patchPost);

app.listen(1234, () => {
  console.log('server open!');
});
