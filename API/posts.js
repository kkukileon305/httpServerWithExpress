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
export const getPost = (_, res) => {
  res.json(posts);
};

// 과제 2
export const createPost = ({ body: { id, content, title, userId }, body }, res) => {
  if (
    !(typeof id === 'number') || //
    !(typeof content === 'string') ||
    !(typeof title === 'string') ||
    !(typeof userId === 'number')
  ) {
    return res.status(400).json({
      message: 'body가 유효하지 않습니다.',
    });
  }

  posts.push(body);

  res.json({ message: 'postCreated' });
};

// 과제 4
export const patchPost = ({ body: { id, content, title, userId } }, res) => {
  if (!(typeof id === 'number') || !(typeof content === 'string')) {
    return res.status(400).json({
      message: 'id나 content가 유효하지 않습니다.',
    });
  }

  if (id > posts.length) {
    return res.status(400).json({
      message: 'id가 현재 posts개수보다 큽니다',
    });
  }

  posts[id - 1] = {
    id,
    title,
    userId,
    content,
  };

  res.status(202).json({
    posts: posts[id - 1],
  });
};

// 과제 5
export const deletePosts = ({ body: { id } }, res) => {
  if (!(typeof id === 'number')) {
    return res.status(400).json({
      message: 'id가 없거나 숫자가 아닙니다',
    });
  }

  if (id > posts.length) {
    return res.status(400).json({
      message: 'id가 현재 posts개수보다 큽니다',
    });
  }

  posts.splice(id - 1);

  res.json({
    message: 'postDelete',
  });
};
