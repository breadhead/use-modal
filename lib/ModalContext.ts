import * as React from 'react'

import { RouteMethod } from './helpers/RouteMethod'

interface ModalContextValue {
  pushRoute: RouteMethod
  replaceRoute?: RouteMethod
}

export const ModalContext = React.createContext<ModalContextValue>({
  pushRoute: () => {
    // pass
  },
  replaceRoute: () => {
    // pass
  },
})
