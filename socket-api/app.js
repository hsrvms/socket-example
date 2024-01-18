import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();

const io = new Server(httpServer, {
	cors: {
		origin: '*',
	},
});

io.on('connection', (socket) => {

  console.log('A user connected to a server.', socket.id)

  socket.on('disconnect', () => {
    console.log('User left the socket connection.', socket.id)
  })
})

httpServer.listen(3000);
