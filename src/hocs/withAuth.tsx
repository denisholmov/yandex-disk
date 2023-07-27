import { FC, ReactElement } from 'react'

import { YandexAuth } from 'modules/auth/components/YandexAuth'

export function withAuth<T = any>(Component: FC<T>) {
  return (props: JSX.IntrinsicAttributes & T): ReactElement => {
    const isAuth = false

    if (!isAuth) {
      return <YandexAuth />
    }

    return <Component {...props} />
  }
}
