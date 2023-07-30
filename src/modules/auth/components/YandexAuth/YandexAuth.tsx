import { useYandexAuth } from 'modules/auth/handlers/useYandexAuth'

import classes from './YandexAuth.module.scss'

export const YandexAuth = () => {
  const { login } = useYandexAuth()

  return (
    <div className="page">
      <button className={classes.button} onClick={login}>
        Авторизоваться через Yandex
      </button>
    </div>
  )
}
