import { useRef } from 'react'

import classes from './SelectFilesButton.module.scss'

interface SelectFilesButtonProps {
  onChange: (files: File[]) => void
}

export const SelectFilesButton = ({ onChange }: SelectFilesButtonProps) => {
  const refInput = useRef<HTMLInputElement>(null)

  return (
    <div>
      <input
        className={classes.input}
        multiple
        onChange={(event) => {
          onChange(event.target.files ? Array.from(event.target.files) : [])
          event.target.value = ''
        }}
        ref={refInput}
        type="file"
      />
      <button className={classes.button} onClick={() => refInput.current?.click()}>
        Выбрать файлы
      </button>
    </div>
  )
}
