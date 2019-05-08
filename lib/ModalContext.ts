import * as React from 'react'

import { PushRoute } from './helpers/PushRoute'

interface ModalContextValue {
  pushRoute: PushRoute
}

export const ModalContext = React.createContext<ModalContextValue>({
  pushRoute: () => {
    // pass
  },
})
