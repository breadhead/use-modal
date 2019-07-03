import { RouteMethod } from '../RouteMethod'

export const getRouterMethod = (
  pushRoute: RouteMethod,
  replaceRoute?: RouteMethod,
  withoutHistory?: boolean,
) => {
  if (withoutHistory && !!replaceRoute) {
    return replaceRoute
  }

  return pushRoute
}
