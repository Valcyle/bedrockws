/**
 * Send a command to Minecraft client
 * @param {string} command - The command to execute
 * @param {import("ws").WebSocket} ws - The WebSocket client
 */
export function sendCommand(command, ws) {
    const message = {
      header: {
        version: 1,
        requestId: crypto.randomUUID(),
        messageType: "commandRequest",
        messagePurpose: "commandRequest",
      },
      body: { commandLine: command, origin: { type: "player"}, version: 1 },
    };
    if (ws && typeof ws.send === "function") {
      ws.send(JSON.stringify(message));
    } else {
      console.error("sendCommand: ws is not a WebSocket client");
    }
  }
  