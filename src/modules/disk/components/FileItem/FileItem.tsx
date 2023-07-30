import { ReactComponent as RemoveIcon } from 'assets/img/delete.svg'
import { Statuses } from 'modules/disk/interfaces/common'

import classes from './FileItem.module.scss'

interface FileItemProps {
  fileName: string
  onRemove?: () => void
  status: Statuses
}

export const FileItem = ({ fileName, onRemove, status }: FileItemProps) => (
  <div className={classes.item}>
    <div className={classes.left}>
      <div>{fileName}</div>
      <div className={classes.status}>Статус: {status}</div>
    </div>
    <div className={classes.remove} onClick={onRemove}>
      <RemoveIcon />
    </div>
  </div>
)
