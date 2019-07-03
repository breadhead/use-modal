import { useCallback, useContext } from 'react'

import { updateRoute } from './helpers/updateRoute'
import { MODAL_QUERY_PREFIX } from './helpers/MODAL_QUERY_PREFIX'
import { MODAL_DEFAULT_VALUE } from './helpers/MODAL_DEFAULT_VALUE'
import { ModalContext } from './ModalContext'

export const useModalActions = (
  key: string,
  withoutHistory: boolean = false,
) => {
  const { pushRoute } = useContext(ModalContext)
  const { replaceRoute } = useContext(ModalContext)

  const open = useCallback(
    (value: string = MODAL_DEFAULT_VALUE) =>
      updateRoute(
        pushRoute,
        replaceRoute || null,
        `${MODAL_QUERY_PREFIX}${key}`,
        value,
        withoutHistory,
      ),
    [key, pushRoute, replaceRoute, withoutHistory],
  )

  const close = useCallback(
    () =>
      updateRoute(
        pushRoute,
        replaceRoute || null,
        `${MODAL_QUERY_PREFIX}${key}`,
        null,
        withoutHistory,
      ),
    [key, pushRoute, replaceRoute, withoutHistory],
  )

  return {
    open,
    close,
  }
}
