import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello Backend' });
});

app.listen(3333);
