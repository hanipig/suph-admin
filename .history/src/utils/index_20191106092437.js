// localStorage相关操作： 
/**
 * @param {key}: 
 * @param {val}
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