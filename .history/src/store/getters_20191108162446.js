import { getMenuByRouter, getHomeRoute } from '@/util'
import routers from '@/router/routers'
const getters = {
  menuList: state => getMenuByRouter(routers, state.user.access),
  tagNavList: state => getHomeRoute(routers, 'home')
}
export default getters
