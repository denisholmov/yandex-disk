import Axios from 'axios'

export const axios = Axios.create({ baseURL: 'https://cloud-api.yandex.net/v1/disk' })
