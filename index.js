const { PeerServer } = require("peer");

console.log("Starting server...");

const peerServer = PeerServer({
  port: 9090,
  path: "/nakamoto",
  allow_discovery: true,
});

peerServer.on("connection", (client) => {
  console.log("Client connected: " + client.id);
});

peerServer.on("disconnect", (client) => {
  console.log("Client disconnected: " + client.id);
});
