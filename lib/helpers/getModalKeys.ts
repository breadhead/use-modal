import { MODAL_QUERY_PREFIX } from './MODAL_QUERY_PREFIX'

export const getModalKeys = (query: object) =>
  new Set(
    Object.keys(query)
      .filter(key => key.startsWith(MODAL_QUERY_PREFIX))
      .map(key => key.replace(MODAL_QUERY_PREFIX, '')),
  )
