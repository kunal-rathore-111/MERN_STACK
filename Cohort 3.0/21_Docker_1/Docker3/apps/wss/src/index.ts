import WebSocket, { WebSocketServer } from 'ws';
import { db, UsersTable } from '@repo/database';

try {
  await db.execute('SELECT 1');
  console.log('DB working for WS server');
} catch (error) {
  console.error('Error while checking DB status in WS server: ', error);
}

const PORT = Number(process.env.PORT) || 8080;
const wss = new WebSocketServer({
  port: PORT,
});

console.log('WSS server started on PORT: ', PORT);

wss.on('connection', (ws: WebSocket) => {
  console.log('NEW CLIENT CONNECTED');

  ws.on('message', async (data: Buffer) => {
    const message = data.toString(); // convert to string then json
    const d = JSON.parse(message);
    console.log('Message Recieved: ', message);
    if (!d || !d.name) return ws.send('Name not found in request');
    try {
      await db.insert(UsersTable).values({ name: d.name });
      return ws.send(`Name: ${d.name} stored in database`);
    } catch (error) {
      console.error('Error in ws while saving name: ', error);
      return ws.send('Something went wrong unable to save name in db from ws server');
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
