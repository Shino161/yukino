export const deepClone = (target:any) => {
  if (typeof target === 'object') {
    let cloneTarget:any = Array.isArray(target) ? []:{}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone(target[key])
      }
      return cloneTarget
    }  
  }else {
    return target
  }
}