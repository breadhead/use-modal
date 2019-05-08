import qs from 'qs'

export const getQuery = (search: string) => qs.parse(search.split('?')[1])
