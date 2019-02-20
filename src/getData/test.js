import { post } from '@/api/api'

/**
 * test
 */
export const test = async () => {
  let res = await post('config/provinces')
  return res
}

