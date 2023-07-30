import { FileList } from 'modules/disk/components/FileList/FileList'
import { SelectFilesButton } from 'modules/disk/components/SelectFilesButton'
import { UploadButton } from 'modules/disk/components/UploadButton'
import { useSelectedFiles } from 'modules/disk/handlers/useSelectedFiles'

import classes from './UploadBlock.module.scss'

export const UploadBlock = () => {
  const { selectedFiles, errorMessage, addFiles, removeFile } = useSelectedFiles({ maxLength: 100 })

  const uploadFiles = () => {
    selectedFiles.forEach((item) => item.upload())
  }

  return (
    <div className={classes.wrap}>
      <div className={classes.top}>
        <SelectFilesButton onChange={addFiles} />
        {!!selectedFiles.length && <UploadButton onClick={uploadFiles} />}
      </div>
      {errorMessage && <div className={classes.error}>{errorMessage}</div>}
      <FileList className={classes.list} files={selectedFiles} onRemove={removeFile} />
    </div>
  )
}
