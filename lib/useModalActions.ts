import { useCallback, useContext } from 'react'

import { updateRoute } from './helpers/updateRoute'
import { MODAL_QUERY_PREFIX } from './helpers/MODAL_QUERY_PREFIX'
import { ModalContext } from './ModalContext'

export const useModalActions = (key: string) => {
  const { pushRoute } = useContext(ModalContext)

  const open = useCallback(
    () => updateRoute(pushRoute, `${MODAL_QUERY_PREFIX}${key}`, 'open'),
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
