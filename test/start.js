import bedrockws from "../index.js";

// サーバーを起動（追加イベント購読も可能）
const server = bedrockws.createServer(3000);

console.log("BedrockWS test server started.");

// PlayerTravelled イベントのリスナー
server.on("PlayerTravelled", (data, ws) => {
  console.log("[PlayerTravelled] player travelled!");
  // コマンド送信テスト
  server.sendCommand("/say Hello", ws);
});

// MobInteracted イベントのリスナー
server.on("MobInteracted", (data, ws) => {
  console.log("[MobInteracted] Data received:", data);
});

// 接続済みクライアント数を定期表示
setInterval(() => {
  console.log(`Connected clients: ${server.wss.clients.size}`);
}, 5000);

// server.on("BlockPlaced", (data, ws) => {
//   console.log("[BlockPlaced] Data received:", data);
// });

// サンプル用に 30 秒後にサーバー停止
setTimeout(() => {
  console.log("Stopping test server...");
  server.wss.close();
  process.exit(0);
}, 30000);
