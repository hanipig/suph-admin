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
export const hasChild = (item) => {

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
