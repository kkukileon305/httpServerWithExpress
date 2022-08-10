import express from 'express';
import { getUser, createUser } from './API/users.js';
import { getPost, createPost, patchPost, deletePosts } from './API/posts.js';

const app = express();
app.use(express.json());

// users
app.get('/users', getUser);
app.post('/users', createUser); // 과제 1

// posts
app.get('/posts', getPost); // 과제 3
app.post('/posts', createPost); // 과제 2
app.patch('/posts', patchPost); // 과제 4
app.delete('/posts', deletePosts); // 과제 5

app.listen(1234, () => {
  console.log('server open!');
});
