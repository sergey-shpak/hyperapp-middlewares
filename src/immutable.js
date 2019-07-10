function freeze(obj){
  Object.getOwnPropertyNames(obj).forEach(name =>
    obj[name] && typeof obj[name] == 'object' && freeze(obj[name]))
  return Object.freeze(obj)
}

export function immutable(dispatch){
  return function(action, props, obj){
    dispatch(
      typeof action == 'object' && !Array.isArray(action)
      ? freeze(action)
      : action,
      props,
      obj
    )
  }
}
