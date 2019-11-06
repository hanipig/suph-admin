// localStorage相关操作： 增删读
export const localSave = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}
export const localRemove = (key) => {
  localStorage.removeItem(key)
}
