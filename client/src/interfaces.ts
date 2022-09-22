
export interface ServerToClientEvents {
    noArg: () => void;
  }
  
  export interface ClientToServerEvents {
    hello: () => void;
  }
  
  export interface InterServerEvents {
    ping: () => void;
  }
  
  export interface SocketData {
    name: string;
    age: number;
  }