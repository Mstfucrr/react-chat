// ApiService.js

import axios from 'axios'

const BASE_URL = 'http://localhost:5000' // Replace with your actual API base URL

export const fetchApiTest = async () => {
  const url = `${BASE_URL}/api`
  const response = await axios.get(url)
  const data = await response.data
  return data
}
