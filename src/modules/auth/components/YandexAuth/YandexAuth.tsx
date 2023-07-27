import { useYandexAuth } from 'modules/auth/handlers/useYandexAuth'

export const YandexAuth = () => {
  const { login } = useYandexAuth()

  return <button onClick={login}>Авторизоваться через Yandex</button>
}
