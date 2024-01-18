import { useEffect, useState } from 'react';
import './App.css';
import { io } from 'socket.io-client';

function App() {
	const serverURL = 'http://localhost:3000';
	const socket = io(serverURL);

	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		function onConnect() {
      console.log('user connected', socket.id)
			setIsConnected(true);
		}

		function onDisconnect() {
      console.log('user disconnected', socket.id)
			setIsConnected(false);
		}

		socket.on('connect', onConnect);
		socket.on('disconnect', onDisconnect);

		return () => {
			socket.off('connect');
			socket.off('disconnect');
		};
	}, []);

	return (
		<>
			<div>
				<h1>Socket Status</h1>
				<p>
					Socket Status
					{isConnected ? ' Connected' : ' Connection lost'}
				</p>
			</div>
		</>
	);
}

export default App;
