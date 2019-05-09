import { useCallback, useContext } from 'react'

import { updateRoute } from './helpers/updateRoute'
import { MODAL_QUERY_PREFIX } from './helpers/MODAL_QUERY_PREFIX'
import { MODAL_DEFAULT_VALUE } from 'helpers/MODAL_DEFAULT_VALUE'
import { ModalContext } from './ModalContext'

export const useModalActions = (key: string) => {
  const { pushRoute } = useContext(ModalContext)

  const open = useCallback(
    (value: string = MODAL_DEFAULT_VALUE) =>
      updateRoute(pushRoute, `${MODAL_QUERY_PREFIX}${key}`, value),
    [key, pushRoute],
  )

  const close = useCallback(
    () => updateRoute(pushRoute, `${MODAL_QUERY_PREFIX}${key}`),
    [key, pushRoute],
  )

  return {
    open,
    close,
  }
}
