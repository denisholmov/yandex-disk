import { useEffect, useState } from 'react'

export const useYandexAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    const yandexAuthUrl =
      'https://oauth.yandex.ru/authorize?response_type=token&client_id=1b3fc8961e684428b0d000a2c6407a6a&redirect_uri=http://localhost:9000/'
    window.location.href = yandexAuthUrl
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1))
    const accessToken = params.get('access_token')

    if (accessToken) {
      setIsLoggedIn(true)
    }
  }, [])

  return { login, isLoggedIn }
}
