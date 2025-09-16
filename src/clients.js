export class PlayerManager {
    constructor() {
      this.clients = new Map(); // ws -> playerName
    }
  
    add(ws, name = null) {
      this.clients.set(ws, { name });
    }
  
    remove(ws) {
      this.clients.delete(ws);
    }
  
    list() {
      const result = [];
      for (const [, info] of this.clients) {
        result.push(info);
      }
      return result;
    }
  
    getByName(name) {
      for (const [ws, info] of this.clients) {
        if (info.name === name) return ws;
      }
      return null;
    }
  }
  