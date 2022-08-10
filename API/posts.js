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
  res.json(posts);
};

// 과제 2
export const createPost = (req, res) => {
  posts.push(req.body);
  console.log(posts);

  res.json({ message: 'postCreated' });
};

// 과제 4
export const patchPost = ({ body: { postingId, content } }, res) => {
  if (!(typeof postingId === 'number') || !(typeof content === 'string')) {
    return res.status(400).json({
      message: 'postingId나 content가 유효하지 않습니다.',
    });
  }

  if (postingId > posts.length) {
    return res.status(400).json({
      message: 'postingId가 현재 posts개수보다 큽니다',
    });
  }

  posts[postingId - 1].content = content;

  res.status(202).json({
    posts: posts[postingId - 1],
  });
};

// 과제 5
export const deletePosts = ({ body: { postingId } }, res) => {
  if (!(typeof postingId === 'number')) {
    return res.status(400).json({
      message: 'postingId가 없거나 숫자가 아닙니다',
    });
  }

  if (postingId > posts.length) {
    return res.status(400).json({
      message: 'postingId가 현재 posts개수보다 큽니다',
    });
  }

  posts.splice(postingId - 1);
  console.log(posts);

  res.json({
    message: 'postDelete',
  });
};
