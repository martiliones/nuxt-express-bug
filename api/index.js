import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/projects', (req, res) => {
  res.json([
    {
      name: 'asdsad',
      type: ['asdsad', 'asdsad']
    }
  ])
})

export default app;
