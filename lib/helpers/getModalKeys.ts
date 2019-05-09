import { MODAL_QUERY_PREFIX } from './MODAL_QUERY_PREFIX'

export const getModalKeys = (query: object) =>
  new Map<string, string>(
    Object.entries(query)
      .filter(([key]) => key.startsWith(MODAL_QUERY_PREFIX))
      .map(([key, value]) => [key.replace(MODAL_QUERY_PREFIX, ''), value]),
  )
