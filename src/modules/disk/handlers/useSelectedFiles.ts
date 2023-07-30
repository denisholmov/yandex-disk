import { useState } from 'react'

import { Statuses } from 'modules/disk/interfaces/common'
import { useUpload } from 'modules/disk/requests/useUpload'
import { v4 as uuid } from 'uuid'

export const useSelectedFiles = (options?: { maxLength: number }) => {
  const [selectedFiles, setSelectedFiles] = useState<
    { file: File; key: string; upload: () => void; status: Statuses }[]
  >([])
  const [errorMessage, setErrorMessage] = useState('')

  const { upload } = useUpload()

  const setStatus = (key: string, status: Statuses) => {
    setSelectedFiles((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          return { ...item, status }
        }
        return item
      }),
    )
  }

  const addFiles = (files: File[]) => {
    if (options?.maxLength && files.length > options.maxLength) {
      setErrorMessage(`Максимальное количество файлов - ${options.maxLength}`)
      return
    }
    setErrorMessage('')

    const newFiles = files.map((file) => {
      const key = uuid()
      return {
        file,
        key,
        upload: () => {
          setStatus(key, Statuses.Uploading)
          upload(file)
            .then(() => setStatus(key, Statuses.Completed))
            .catch(() => setStatus(key, Statuses.Error))
        },
        status: Statuses.NotStarted,
      }
    })

    setSelectedFiles((prev) => [...prev, ...newFiles])
  }

  const removeFile = (key: string) => {
    setSelectedFiles((prev) => prev.filter((item) => item.key !== key))
  }

  return { selectedFiles, errorMessage, addFiles, removeFile }
}
