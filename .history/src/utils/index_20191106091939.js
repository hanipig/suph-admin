export const localSave = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}