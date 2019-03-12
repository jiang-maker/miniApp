import { post } from '@/api/api'
import { get } from '../api/api'

/**
 * test
 */
export const test = async () => {
  let res = await post('config/provinces')
  return res
}

/**
 * api_key = 01e7d10012613181d03c538d00f6dcb0
 */
export const getCloud = async (obj) => {
  let res = await get('weather/index', obj)
  return res
}
