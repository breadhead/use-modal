import { ReplaceRoute } from 'helpers/ReplaceRoute'
import { PushRoute } from 'helpers/PushRoute'

export const getRouterMethod = (
  pushRoute: PushRoute,
  replaceRoute?: ReplaceRoute,
  withoutHistory?: boolean,
) => {
  if (withoutHistory) {
    if (!!replaceRoute) {
      return replaceRoute
    }
  }
  return pushRoute
}
