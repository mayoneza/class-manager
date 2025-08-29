import { DurableObject } from "cloudflare:workers";

// Worker
export default {
  async fetch(request, env) {
    
    // A stub is a client Object used to send messages to the Durable Object.
    let stub = env.ClassDO.getByName(name);

    // Send a request to the Durable Object using RPC methods, then await its response.
    
    return new Response();
  },
};

// Durable Object
export class Counter extends DurableObject {
  
      }
