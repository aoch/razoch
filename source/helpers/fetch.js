import 'isomorphic-fetch'
import { Agent } from 'https'

const fetch = (url) => {
  const options = {
    agent: new Agent({ rejectUnauthorized: false }) // Only needed for self-signed certificates
  }
  return global.fetch(url, options).then((data) => data.json())
}

export default fetch
