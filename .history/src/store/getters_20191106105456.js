import { getMenuByRouter } from '@/util'
import routers from '@/router/index'
const getters = {
  menuList: state => getMenuByRouter(routers, state.user.access),
}
export default getters
