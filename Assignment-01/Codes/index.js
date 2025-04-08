const express = require('express');
const app = express();
const port = 8080;

const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');


app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


//get user summery
app.get('/user/summary/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    const postCount = posts.filter(p => p.authorId === userId).length;
    const commentCount = comments.filter(c => c.userId === userId).length;
  
    const summary = {
      id: user.id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      'Number of Post': postCount,
      'Number of Comment': commentCount
    };
  
    res.json(summary);
  });

  
  //get comments
  app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);
  
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
  
    const postComments = comments
      .filter(c => c.postId === postId)
      .map(c => {
        const commentator = users.find(u => u.id === c.userId);
        return {
          commentator: commentator ? commentator.fullName : 'Unknown',
          comment: c.content
        };
      });
  
    res.json(postComments);
  });
