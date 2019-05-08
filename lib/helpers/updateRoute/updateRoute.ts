import { getNewPathname } from './getNewPathname'
import { PushRoute } from '../PushRoute'

export const updateRoute = (
  pushRoute: PushRoute,
  keyName: string,
  keyValue?: string,
) => {
  const { pathname, search } = window.location
  const newPathname = getNewPathname(search, keyName, keyValue, pathname)

  return pushRoute(newPathname)
}
