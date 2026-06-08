import express from 'express';
import { db, UsersTable } from '@repo/database';
const app = express();
app.use(express.json());

try {
  await db.execute('select 1');
  console.log('database connected');
} catch (error) {
  console.error('database not connected (error from server)');
}

app.get('/', async (req, res) => {
  console.log('On get route');
  try {
    const data = await db.select().from(UsersTable);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.error('Error in get route, ', error);
    return res.status(500).json({ message: 'Fetch failed' });
  }
});
app.post('/', async (req, res) => {
  console.log('On post route');
  try {
    const data = req.body;
    if (!data || !data.name) return res.status(404).json({ message: 'Data not found in given request' });
    await db.insert(UsersTable).values({ name: data.name });
    return res.status(200).json({
      message: 'Data stored',
    });
  } catch (error) {
    console.error('Error in get route, ', error);
    return res.status(500).json({ message: 'Storing data failed' });
  }
});

const PORT = Number(process.env.PORT) || 3001;
if (PORT === 3000)
  throw new Error('PORT: 3000 not possible already used by NextJS please update the PORT in .env of server');

app.listen(PORT, () => {
  console.log('Bun server started at PORT: ', PORT);
});
