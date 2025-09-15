import WebSocket, { WebSocketServer } from 'ws';
import { formatMessage } from './messages.js';

/**
 * Starts a WebSocket server for Minecraft Bedrock Edition clients.
 * @param {number} port - The port number to listen on (default: 3000)
 * @returns {WebSocketServer} The WebSocket server instance
 */
export function startServer(port = 3000) {
  const wss = new WebSocketServer({ port });

  wss.on('connection', (ws) => {
    console.log('Minecraft client connected');

    ws.on('message', (msg) => {
      console.log('Received message:', msg.toString());
      const formatted = formatMessage(msg.toString());
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(formatted);
        }
      });
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  console.log(`WebSocket server running on ws://localhost:${port}`);
  return wss;
}
