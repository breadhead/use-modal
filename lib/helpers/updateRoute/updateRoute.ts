import { getNewPathname } from './getNewPathname'
import { RouteMethod } from '../RouteMethod'
import { getRouterMethod } from './getRouterMethod'

export const updateRoute = (
  pushRoute: RouteMethod,
  replaceRoute: RouteMethod,
  keyName: string,
  keyValue?: string,
  withoutHistory?: boolean,
) => {
  const { pathname, search } = window.location
  const newPathname = getNewPathname(search, keyName, keyValue, pathname)
  const routerMethod = getRouterMethod(pushRoute, replaceRoute, withoutHistory)

  return routerMethod(newPathname)
}
