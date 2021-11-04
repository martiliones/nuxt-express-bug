import express from 'express';

const app = express();

app.get('/projects', (req, res) => {
  res.json([
    {
      name: 'asdsad',
      type: ['asdsad', 'asdsad']
    }
  ])
})

export default app;
