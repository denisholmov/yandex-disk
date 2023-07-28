import { ReactComponent as RemoveIcon } from 'assets/img/delete.svg'

import classes from './FileItem.module.scss'

interface FileItemProps {
  fileName: string
  onRemove?: () => void
}

export const FileItem = ({ fileName, onRemove }: FileItemProps) => (
  <div className={classes.item}>
    <div className={classes.name}>{fileName}</div>
    <div className={classes.remove} onClick={onRemove}>
      <RemoveIcon />
    </div>
  </div>
)
