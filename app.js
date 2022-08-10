import express from 'express';
import { getUser, createUser } from './API/users.js';
import { getPost, createPost, patchPost } from './API/posts.js';

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
app.get('/users', getUser);
app.post('/users', createUser);

// posts
app.get('/posts', getPost);
app.post('/posts', createPost);
app.patch('/posts', patchPost);

app.listen(1234, () => {
  console.log('server open!');
});
