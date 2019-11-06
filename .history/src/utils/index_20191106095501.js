// localStorage相关操作： 
export const localSave = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

export const localRemove = (key) => {
  localStorage.removeItem(key)
}

export const localRead = (key) => {
  localStorage.getItem(key)
}

// 根据路由列表得到菜单列表相关
// 判断是否有children
export const hasChild = (item) => {
  return item.children && item.children.length != 0
}

/**
 * @param {Array} targetArr 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetArr, arr) => {
  return targetArr.some(item => arr.indexOf(item) !== -1)
}

/**
 * @param {Array} targetArr 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断是否显示该路由项
 */
export const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) return true
    else return false
  }
}

export const getMenuByRouter = (routerList, access) => {
  let menuList = []  // 用来存放最后生成的菜单列表
  routerList.forEach(item => { // 遍历路由列表
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      // 如果该路由项存在meta属性而且不隐藏，进入该流程
      // 把基础的数据(icon,name,meta)填充了再考虑children
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if ((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item, access)) {
        obj.children = getMenuByRouter(item.children, access)
      }
      menuList.push(obj)
    }
  })
}
