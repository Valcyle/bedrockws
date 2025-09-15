import { WebSocketServer } from 'ws';

/**
 * Starts a WebSocket server for Minecraft Bedrock Edition clients.
 * @param port The port number to listen on
 * @returns The WebSocket server instance
 */
export function startServer(port?: number): WebSocketServer;

/**
 * Formats a message for Bedrock clients.
 * @param msg The message to format
 * @returns Formatted message
 */
export function formatMessage(msg: string): string;
