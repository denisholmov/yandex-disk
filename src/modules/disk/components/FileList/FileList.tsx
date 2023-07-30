import cx from 'clsx'
import { FileItem } from 'modules/disk/components/FileItem'
import { Statuses } from 'modules/disk/interfaces/common'

import classes from './FileList.module.scss'

interface FileListProps {
  className?: string
  files: { file: File; key: string; status: Statuses }[]
  onRemove: (key: string) => void
}

export const FileList = ({ files, className, onRemove }: FileListProps) => (
  <div className={cx(classes.list, className)}>
    {!files.length && <p className={classes.noFiles}>Файлы не выбраны</p>}
    {files.map(({ file, key, status }) => (
      <FileItem fileName={file.name} key={key} onRemove={() => onRemove(key)} status={status} />
    ))}
  </div>
)
