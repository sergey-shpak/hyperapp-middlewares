import { middleware } from './index'

var isArray = Array.isArray
var isObject = function(obj){ return typeof obj === 'object' }
var isFunction = function(fn){ return typeof fn === 'function' }

export function onState(cb){
  return middleware(function(action){
    return isObject(action) && !isArray(action) && cb(action)
  })
}

export function onAction(cb){
  return middleware(function(action){
    return isFunction(action) && cb(action)
  })
}

export function onTuple(cb){
  return middleware(function(action){
    return isArray(action) && isFunction(action[0]) && cb(action)
  })
}

export function onEffect(cb){
  return middleware(function(action){
    return isArray(action) && isArray(action[1]) && cb(action[1])
  })
}