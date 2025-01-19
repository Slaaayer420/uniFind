// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/uni-find
import { Client } from "@gadget-client/uni-find";

export const api = new Client({ environment: window.gadgetConfig.environment });


