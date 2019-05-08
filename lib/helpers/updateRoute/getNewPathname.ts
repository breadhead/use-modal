import { getQuery } from './getQuery'
import { getNewSearch } from './getNewSearch'

export const getNewPathname = (
  search: string,
  keyName: string,
  keyValue: string | undefined,
  pathname: string,
) => {
  const prevQuery = getQuery(search)
  const newSearch = getNewSearch(prevQuery, keyName, keyValue)
  const searchSuffix = newSearch.length > 0 ? `?${newSearch}` : ''
  const newPathname = `${pathname}${searchSuffix}`
  return newPathname
}
