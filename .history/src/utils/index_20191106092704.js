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
export const getMenuByRouter = (route, access)
