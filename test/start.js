import { startServer, formatMessage } from '../src/index.js';

const server = startServer(3000);

console.log(formatMessage('Hello Minecraft Test'));