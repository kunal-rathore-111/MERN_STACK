import express from 'express';
import { connectDB, db } from './db/config';
import { users } from './db/models';

const app = express();
app.use(express.json());
connectDB();

app.get('/', async (req, res) => {
  const message = 'on get initial route';
  const data = await db.select().from(users);
  console.log(message);
  return res.status(200).json({ message, data });
});

app.post('/', async (req, res) => {
  const data = await req.body;
  if (!data.name) return res.status(400).json({ message: 'Name not found in input' });
  console.log(data);
  await db.insert(users).values({ name: data.name });
  const message = 'data saved';
  console.log(message);
  return res.status(200).json({ message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server started on PORT:', PORT);
});
