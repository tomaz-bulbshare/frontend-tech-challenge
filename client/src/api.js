import axios from 'axios'

const BACKEND_URL = 'http://localhost:4000/'

const callAPI = async (path) => {
  let data
  await axios.get(`${BACKEND_URL}${path}`).then(res => {
    data = res
  })
    .catch(err => console.log(`API ERROR: ${err}`))
  return data
}

export default callAPI
