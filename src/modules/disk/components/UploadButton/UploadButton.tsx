import classes from './UploadButton.module.scss'

interface UploadButtonProps {
  onClick?: () => void
}

export const UploadButton = ({ onClick }: UploadButtonProps) => (
  <button className={classes.button} onClick={onClick}>
    Загрузить
  </button>
)
