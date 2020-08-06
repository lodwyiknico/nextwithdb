import axios from 'axios'

const { CancelToken } = axios
const source = CancelToken.source()

const checkAuthPostReq = async (url, data) => {
    const res = await axios.post(url, data, { cancelToken: source.token })
    return res
  }

export const getApi = async () => {
    const url = '/api/posts'
    const response = await checkAuthPostReq(url)
    return response
  }
  