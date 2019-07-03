import { getNewPathname } from './getNewPathname'
import { PushRoute } from '../PushRoute'

export const updateRoute = (
  pushRoute: PushRoute,
  keyName: string,
  keyValue?: string,
  withoutHistory?: boolean,
) => {
  const { pathname, search } = window.location
  const newPathname = getNewPathname(search, keyName, keyValue, pathname)

  return !!withoutHistory
    ? location.replace(newPathname)
    : pushRoute(newPathname)
}
