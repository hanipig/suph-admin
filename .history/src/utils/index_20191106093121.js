// localStorage相关操作： 
/**
 * @param {key}: 字段名
 * @param {val}: 字段值
 */
export const localSave = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

export const localRemove = (key) => {
  localStorage.removeItem(key)
}

export const localRead = (key) => {
  localStorage.getItem(key)
}

//根据路由列表得到菜单列表相关
export const getMenuByRouter = (routerList, access) => {
  let menuList = []
  routerList.forEach(item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
    }
  })
}
