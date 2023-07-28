import { FC, ReactElement } from 'react'

import { YandexAuth } from 'modules/auth/components/YandexAuth'
import { useYandexAuth } from 'modules/auth/handlers/useYandexAuth'

export function withAuth<T = any>(Component: FC<T>) {
  return (props: JSX.IntrinsicAttributes & T): ReactElement => {
    const { isLoggedIn } = useYandexAuth()

    if (!isLoggedIn) {
      return <YandexAuth />
    }

    return <Component {...props} />
  }
}
