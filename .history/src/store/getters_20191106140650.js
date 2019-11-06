import { getMenuByRouter } from '@/util'
import routers from '@/router/routers'
const getters = {
  menuList: state => getMenuByRouter(routers[0].children, state.user.access),
}
export default getters
