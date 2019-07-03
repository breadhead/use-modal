import { getNewPathname } from './getNewPathname'
import { PushRoute } from '../PushRoute'
import { ReplaceRoute } from 'helpers/ReplaceRoute'
import { getRouterMethod } from './getRouterMethod'

export const updateRoute = (
  pushRoute: PushRoute,
  replaceRoute: ReplaceRoute,
  keyName: string,
  keyValue?: string,
  withoutHistory?: boolean,
) => {
  const { pathname, search } = window.location
  const newPathname = getNewPathname(search, keyName, keyValue, pathname)
  const routerMethod = getRouterMethod(pushRoute, replaceRoute, withoutHistory)

  return routerMethod(newPathname)
}
