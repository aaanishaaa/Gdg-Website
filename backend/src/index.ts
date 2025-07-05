import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from GDG Noida backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
