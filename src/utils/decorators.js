export const BaseURL = (url) => {
  return (target) => {
    target.$name = url
  }
}

export const ReadOnly = (target, name, descriptor) => {
  descriptor.writable = false
  return descriptor
}

export const Memorize = ({timeOut = 3600000, cache = {}} = {}) => {
  return (target, name, descriptor) => {
    let f = descriptor.value
    descriptor.value = async function () {
      let argStr = JSON.stringify(arguments)
      if (!Reflect.has(cache, argStr)) {
        cache[argStr] = {
          data: await f.apply(target, arguments),
          createTime: new Date()
        }
        setTimeout(() => {
          Reflect.deleteProperty(cache, argStr)
        }, timeOut)
      }
      return cache[argStr].data
    }
  }
}
