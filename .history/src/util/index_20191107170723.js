// localStorage相关操作： 增删查
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
 * @param {Object} item 路由项
 * @param {Array} access 后端返回的权限列表
 * @description 判断是否显示该路由项
 */
export const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    //如果有路由项中有权限列表就进行比对，否则默认为需要显示该路由项
    if (hasOneOf(item.meta.access, access)) return true
    else return false
  } else return true
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
        // (如果有子路由 或 meta指定显示 ) 且 显示该路由项 => 进行递归
        obj.children = getMenuByRouter(item.children, access)
      }
      // if (item.meta && item.meta.href) obj.href = item.meta.href
      if (showThisMenuEle(item, access)) menuList.push(obj)
    }
  })
  return menuList
}

// 判断打开的标签列表中是否已经存在这个路由对象
export const routeHasExist = (tagNavList, routeItem) => {
  return tagNavList.some((item) => {
    return item === routeItem
  })
}

// 判断两个对象是否相等，这两个对象的值只能是数字或字符串
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) return false
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true
  else return !keysArr1.some(item => obj1[item] !== obj2[item])
}

// 根据name/params/query判断两个路由对象是否相等 详情页多开的时候需要用到
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
}