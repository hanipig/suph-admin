import { getMenuByRouter } from '@/util'
import routers from '@/router/routers'
const getters = {
  menuList: state => getMenuByRouter(routers, state.user.access),
  tagNavList: state => state.app.tagNavList
}
export default getters
