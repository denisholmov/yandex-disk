import { useState } from 'react'

import { FileList } from 'modules/disk/components/FileList/FileList'
import { SelectFilesButton } from 'modules/disk/components/SelectFilesButton'
import { UploadButton } from 'modules/disk/components/UploadButton'
import { v4 as uuid } from 'uuid'

import classes from './UploadBlock.module.scss'

export const UploadBlock = () => {
  const [selectedFiles, setSelectedFiles] = useState<{ file: File; key: string }[]>([])
  const [errorMessage, setErrorMessage] = useState('')

  const onFileSelect = (files: File[]) => {
    if (files.length > 2) {
      setErrorMessage('Максимальное количество файлов - 100')
      return
    }
    setErrorMessage('')
    setSelectedFiles((prev) => [
      ...prev,
      ...files.map((file) => ({
        file,
        key: uuid(),
      })),
    ])
  }

  const onRemove = (key: string) => {
    setSelectedFiles((prev) => prev.filter((item) => item.key !== key))
  }

  return (
    <div className={classes.wrap}>
      <div className={classes.top}>
        <SelectFilesButton onChange={onFileSelect} />
        {!!selectedFiles.length && <UploadButton />}
      </div>
      {errorMessage && <div className={classes.error}>{errorMessage}</div>}
      <FileList className={classes.list} files={selectedFiles} onRemove={onRemove} />
    </div>
  )
}
