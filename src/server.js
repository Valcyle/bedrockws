import { WebSocketServer } from "ws";
import EventEmitter from "eventemitter3";
import * as Events from "./events.js";
import * as Commands from "./commands.js";

const DEFAULT_EVENTS = ["PlayerTravelled", "PlayerMessage", "BlockPlaced", "BlockBroken", "PlayerJoined", "PlayerLeft"];

export function createServer(port = 3000, additionalEvents = []) {
  const server = new EventEmitter();
  const wss = new WebSocketServer({ port });
  console.log(`WebSocket server listening on port ${port}`);

  // auto subscribe events
  const autoEvents = [...DEFAULT_EVENTS, ...additionalEvents];

  function wrapClient(ws) {
    ws.bedrock = { Events, Commands };
    return ws;
  }

  wss.on("connection", (socket) => {
    console.log("Client connected");

    // auto subscribe events
    for (const eventName of autoEvents) {
      Events.subscribeEvent(socket, eventName);
    }

    const client = wrapClient(socket);
    server.emit("ServerConnection", { message: "client connected" }, client);

    socket.on("message", (msg) => {
      let data;
      try { data = JSON.parse(msg); } catch { return; }
      // console.log(data.header.eventName);
      if (data.header?.eventName) {
        server.emit(data.header.eventName, data, socket);
      }else{
        // console.log(data);
      }
    });

    socket.on("close", () => console.log("Client disconnected"));
  });

  // server.on() to auto subscribe events
  const originalOn = server.on.bind(server);
  server.on = (eventName, listener) => {
    wss.clients.forEach((socket) => {
      if (Events.EVENTS.includes(eventName)) {
        Events.subscribeEvent(socket, eventName);
      }
    });
    return originalOn(eventName, listener);
  };

  server.sendCommand = (command, socket) => {
    Commands.sendCommand(command, socket);
  };

  server.wss = wss;
  return server;
}
