import { BACKEND_URL } from "../constants/constants.js";

const config = {
    clientId: process.env.NYLAS_CLIENT_ID || '491ed749-0032-48f1-bac4-a2f09001cbca',
    apiKey: process.env.NYLAS_API_KEY || 'nyk_v0_3ZxACVeKsR4aL1JNGG0qhsTUJrOXszG3DavzjwQ5PLEOfG8L2nSOdqDTGpz0PYnk',
    apiUri: process.env.NYLAS_API_URI ||  'https://api.eu.nylas.com',
    callbackUri: process.env.CALLBACK_URL || `${BACKEND_URL}/auth/oauth/exchange`
  }



  export default config;