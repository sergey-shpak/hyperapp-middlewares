var isArray = Array.isArray
var isFunction = function(fn){ return typeof fn === 'function' }
var isObject = function(obj){ return typeof obj === 'object' }

export function logger(output, verbose){
  var output = output || console.debug
  var verbose = verbose || false
  return function(dispatch){
    return function(action, props, obj){
      if (isFunction(action))
        output('Action', action.name, props, obj)
      else if(isObject(action) && !isArray(action))
        output('State', action)
      else if (verbose && isArray(action)) {
        if (isFunction(action[0])) output('Tuple', action[0].name, action[1])
        else if (isArray(action[1])) output('Effect', action[1][0].name, action[1][1])
      }
      return dispatch(action, props, obj)
    }
  }
}
