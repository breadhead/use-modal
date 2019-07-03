import React from 'react'

import { ModalContext } from './ModalContext'
import { PushRoute } from './helpers/PushRoute'
import { ReplaceRoute } from 'helpers/ReplaceRoute'

interface Props {
  children: React.ReactNode
  pushRoute: PushRoute
  replaceRoute?: ReplaceRoute
}

export const ModalContextProvider = ({
  children,
  pushRoute,
  replaceRoute = null,
}: Props) => (
  <ModalContext.Provider value={{ pushRoute, replaceRoute }}>
    {children}
  </ModalContext.Provider>
)
