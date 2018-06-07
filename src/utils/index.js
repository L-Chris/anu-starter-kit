import moment from 'dayjs'

export {moment}

export function isUndef (v) {
  return v === undefined || v === null
}
export const identity = _ => _

// 对对象解析路径下的属性
const bailRE = /[^\w.$]/
export const parsePath = path => {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return obj => {
    for (let segment of segments) {
      if (!obj) return
      obj = obj[segment]
    }
    return obj
  }
}

// 遍历对象
export const forIn = (object, iteratee) => {
  let res = {}
  for (let key in object) {
    res[key] = iteratee(object[key], key)
  }
  return res
}

export const pluck = (collection, keys) => {
  keys = keys.split(',')
  return collection.map(_ => keys.reduce((pre, cur) => {
    pre[cur] = _[cur]
    return pre
  }, {}))
}

export const find = (collection, value, iteratee = identity) => {
  if (typeof iteratee === 'string') {
    iteratee = _ => _[iteratee]
  }

  let res = collection.filter(_ => iteratee[_] === value)
  return res
}

export const setTick = (fn, duration, first = true) => {
  first && fn()
  let id = setInterval(fn, duration)
  return () => clearInterval(id)
}

export const toMap = (collection, key) => {
  const res = new Map()
  for (let _ of collection) {
    res.set(_[key], _)
  }
  return res
}
