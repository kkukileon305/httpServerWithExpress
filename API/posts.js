import data from '../data.js';

export const getPost = (req, res) => {
  // 과제 3
  res.json(data);
};

export const createPost = (req, res) => {
  // 과제2

  posts.push(req.body);
  console.log(posts);

  res.json({ message: 'postCreated' });
};

export const patchPost = (req, res) => {
  // 과제4
  console.log(req.body);

  data[0].postingContent = '노드';

  res.json({
    data: data[0],
  });
};
