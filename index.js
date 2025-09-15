import { createServer } from "./src/server.js";
import * as Events from "./src/events.js";
import * as Commands from "./src/commands.js";

const bedrockws = {
    createServer,
    Events,
    Commands,
  };
  
  export default bedrockws;