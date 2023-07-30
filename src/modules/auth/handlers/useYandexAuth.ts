import { useEffect } from 'react'

import { BASE_PUTH, CLIENT_ID, REDIRECT_URI } from 'env'
import { useLocalStorage } from 'usehooks-ts'

export const useYandexAuth = () => {
  const [accessToken, setAccessToken] = useLocalStorage<{ token: string } | null>('accessToken', null)

  const login = () => {
    const yandexAuthUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}${BASE_PUTH}`
    window.location.href = yandexAuthUrl
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1))

    if (params.get('access_token')) {
      setAccessToken({ token: params.get('access_token') as string })
      window.location.href = BASE_PUTH
    }
  }, [])

  return { login, isLoggedIn: !!accessToken?.token }
}
