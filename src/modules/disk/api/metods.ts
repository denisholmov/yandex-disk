import { axios } from 'config/axios'

import { UploadLink } from './interfaces'

const getUploadLink = async (path: string) => {
  const accessToken = JSON.parse(window.localStorage.getItem('accessToken') as string)

  const { data } = await axios.request<UploadLink>({
    method: 'GET',
    url: '/resources/upload',
    params: { path },
    headers: { Authorization: `OAuth ${accessToken.token}` },
  })

  return data
}

const uploadFile = async (url: string, file: File) => {
  const data = new FormData()
  data.set('file', file)
  await axios.request({
    method: 'PUT',
    url,
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const api = { getUploadLink, uploadFile }
