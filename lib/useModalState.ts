import { useQuery } from '@breadhead/use-query'

import { getModalKeys } from './helpers/getModalKeys'

export const useModalState = (key: string): string | undefined => {
  const query = useQuery()

  const keys = getModalKeys(query)

  if (!keys.has(key)) {
    return undefined
  }

  return keys.get(key)
}
