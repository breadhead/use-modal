import React from 'react'

import { ModalContext } from './ModalContext'
import { RouteMethod } from './helpers/RouteMethod'

interface Props {
  children: React.ReactNode
  pushRoute: RouteMethod
  replaceRoute?: RouteMethod
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
