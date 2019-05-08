import { useQuery } from '@breadhead/use-query'

import { getModalKeys } from './helpers/getModalKeys'

export const useModalState = (key: string) => {
  const query = useQuery()

  return getModalKeys(query).has(key)
}
