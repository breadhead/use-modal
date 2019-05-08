import qs from 'qs'

export const getNewSearch = (
  prevQuery: any,
  keyName: string,
  currentKey?: string,
) =>
  qs.stringify({
    ...(prevQuery || {}),
    [keyName]: currentKey,
  })
