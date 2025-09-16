# BedrockWS

[![npm version](https://img.shields.io/npm/v/bedrockws.svg?style=flat-square)](https://www.npmjs.com/package/bedrockws)
[![license](https://img.shields.io/github/license/Valcyle/bedrockws.svg?style=flat-square)](./LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/bedrockws.svg?style=flat-square)](https://www.npmjs.com/package/bedrockws)
[![discord](https://img.shields.io/discord/872775092218761226.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/TXU5NjDRPQ)

**BedrockWS** is a JavaScript library for creating and handling a Minecraft Bedrock WebSocket server.  
It simplifies interaction with the Bedrock WebSocket API by automatically subscribing to events when you listen with `server.on`, and provides convenient utilities for sending commands back to the game.

### ⚠️ This library is still in developing and more features coming in future

---

## 📑 Table of Contents
- [✨ Features](#%E2%9C%A8-features)
- [📦 Installation](#%F0%9F%93%A6-installation)
- [🚀 Usage](#%F0%9F%9A%80-usage)
  - [Create a server](#create-a-server)
  - [Event Subscription](#%F0%9F%94%84-event-subscription)
  - [Sending Commands](#%F0%9F%8E%AE-sending-commands)
- [📡 Available Events](#%F0%9F%93%A1-available-events)
- [🛠 Development](#%F0%9F%9B%A0-development)
- [📂 Project Structure](#%F0%9F%93%82-project-structure)
- [📜 License](#%F0%9F%93%9C-license)

---

## ✨ Features

- 🚀 **Easy Setup** – Create a WebSocket server with a single function call.  
- 🔄 **Automatic Event Subscription** – No need to manually subscribe to events. `server.on` does it for you.  
- 🎮 **Command Sending** – Send Minecraft commands directly to connected clients.  
- 📡 **Many Event Support** – Supports most Bedrock WebSocket events, such as `PlayerMessage`, `BlockPlaced`, and more(Not every events are tested and some may not work as expected).  
- ⚡ **Lightweight & Flexible** – Works out of the box without heavy dependencies.  

---

## 📦 Installation

Install via npm:

```sh
npm install bedrockws
```


---

## 🚀 Usage

### Create a server

```js
import bedrockws from "bedrockws";

// Create a WebSocket server on port 19132
const server = bedrockws.createServer(19132);

// Listen for a Bedrock event
server.on("PlayerTravelled", (data, ws) => {
console.log(Player travelled: ${data.playerName});

// Send a command back to the game
server.sendCommand(/say Hello ${data.playerName}, ws);
});
```

---

### 🔄 Event Subscription

You don’t need to manually subscribe to events.  
When you call:

```js
server.on("EventName", (data, ws) => {
console.log(data);
});
```


The server automatically subscribes to that event for all current and future clients.

---

### 🎮 Sending Commands

You can send Minecraft commands to a client from inside any event callback:

```js
server.sendCommand(command, ws);
```

- **command**: A valid Minecraft command string (e.g. `"/say Hello"`).  
- **ws**: The WebSocket client to send the command to (provided in the event callback).  

This allows you to react to in-game events dynamically, such as teleporting players, changing the time, or sending custom chat messages.

---

## 📡 Available Events

Most Bedrock WebSocket events are supported. Common examples include:

- **PlayerMessage** – Triggered when a player sends a chat message.  
- **PlayerTravelled** – Fired when a player moves.  
- **BlockPlaced** – Triggered when a block is placed.  
- **BlockBroken** – Triggered when a block is destroyed.  
- **SlashCommandExecuted** – Fired when a player runs a slash command.  

For the full event list, see [src/events.js](./src/events.js).

---

## 🛠 Development

### Run tests

There are example test files inside the [test](./test) directory.  
Run the tests with:
```sh
npm test
```

---

## 📂 Project Structure

- [src/](./src) – Core library code.  
- [src/events.js](./src/events.js) – Contains supported Bedrock events.  
- [test/](./test) – Example usage and test cases.  

---

## 📜 License

[MIT](./LICENSE)

