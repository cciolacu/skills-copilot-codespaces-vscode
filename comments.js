// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
// Create express app
const app = express();
// Use body-parser
app.use(bodyParser.json());
// Use cors
app.use(cors());
// Create comments
const commentsByPostId = {};
// Create route for get comments
app.get('/posts/:id/comments', (req, res) => {
    // Send comments
    res.send(commentsByPostId[req.params.id] || []);
});
// Create route for post comments
app.post('/posts/:id/comments', (req, res) => {
    // Create random id
    const commentId = randomBytes(4).toString('hex');
    // Get comment content
    const { content } = req.body;
    // Create new comment
    const comments = commentsByPostId[req.params.id] || [];
    // Push new comment
    comments.push({ id: commentId, content });
    // Set comments
    commentsByPostId[req.params.id] = comments;
    // Send comment
    res.status(201).send(comments);
});
// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});
//# sourceMappingURL=comments.js.map