const data = [
  {
    userID: 1,
    userName: 'Rebekah Johnson',
    postingId: 1,
    postingTitle: '간단한 HTTP API 개발 시작!',
    postingContent: 'Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.',
  },
  {
    userID: 2,
    userName: 'Fabian Predovic',
    postingId: 2,
    postingTitle: 'HTTP의 특성',
    postingContent: 'Request/Response와 Stateless!!',
  },
  {
    userID: 3,
    userName: 'new user 1',
    postingId: 3,
    postingImageUrl: '내용 1',
    postingContent: 'sampleContent3',
  },
  {
    userID: 4,
    userName: 'new user 2',
    postingId: 4,
    postingImageUrl: '내용 2',
    postingContent: 'sampleContent4',
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

// 과제 3
export const getPost = (req, res) => {
  res.json(data);
};

// 과제 2
export const createPost = (req, res) => {
  posts.push(req.body);
  console.log(posts);

  res.json({ message: 'postCreated' });
};

// 과제 4
export const patchPost = (req, res) => {
  console.log(req.body);

  data[0].postingContent = '노드';

  res.status(202).json({
    data: data[0],
  });
};

// 과제 5
export const deletePosts = (req, res) => {
  posts.splice(0);
  console.log(posts, '전부 삭제함');

  res.json({
    message: 'postDelete',
  });
};
