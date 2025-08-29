import { DurableObject } from "cloudflare:workers";

// Worker
export default {
  async fetch(request, env) {
    
    let stub = env.ClassDO.getByName(name);

    
    
    return new Response();
  },
};

// Durable Object
export class classManagerClassDO extends DurableObject {
  
      }
