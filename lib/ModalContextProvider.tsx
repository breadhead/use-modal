import React from 'react'

import { ModalContext } from './ModalContext'
import { PushRoute } from './helpers/PushRoute'

interface Props {
  children: React.ReactNode
  pushRoute: PushRoute
}

export const ModalContextProvider = ({ children, pushRoute }: Props) => (
  <ModalContext.Provider value={{ pushRoute }}>
    {children}
  </ModalContext.Provider>
)
